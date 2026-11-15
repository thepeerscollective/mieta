'use client';
import { useEffect, useRef, useState } from 'react';

type Snd = { name: string; db: number; quiet: number; like: string; peak: number };
const SOUNDS: Snd[] = [
  { name: 'Wiertło turbinowe', db: 78, quiet: 56, like: 'jak suszarka do włosów', peak: 1 },
  { name: 'Ssak', db: 65, quiet: 43, like: 'jak ekspres do kawy', peak: .7 },
  { name: 'Skaler ultradźwiękowy', db: 70, quiet: 48, like: 'jak czajnik przed zagotowaniem', peak: .85 },
  { name: 'Mikrosilnik', db: 60, quiet: 38, like: 'jak zwykła rozmowa', peak: .6 },
];

function bars(i: number) {
  let s = i * 13 + 7;
  return Array.from({ length: 36 }, () => { s = (s * 9301 + 49297) % 233280; return 18 + (s / 233280) * 82; });
}

/** Synthesised versions of the clinic sounds (Web Audio), with a "noise-cancelling headphones" mode. */
export default function Listen() {
  const [quiet, setQuiet] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);
  const ctx = useRef<AudioContext | null>(null);
  const nodes = useRef<{ stop: () => void; master: GainNode; lp: BiquadFilterNode } | null>(null);

  const stop = () => { nodes.current?.stop(); nodes.current = null; setPlaying(null); };

  const play = (i: number) => {
    if (playing === i) return stop();
    stop();
    const ac = ctx.current ?? new AudioContext(); ctx.current = ac;
    const master = ac.createGain(); master.gain.value = quiet ? 0.06 : 0.5;
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = quiet ? 1100 : 16000;
    master.connect(lp).connect(ac.destination);
    const srcs: AudioScheduledSourceNode[] = [];
    const noise = (type: BiquadFilterType, f: number, g: number) => {
      const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate); const d = buf.getChannelData(0);
      for (let k = 0; k < d.length; k++) d[k] = Math.random() * 2 - 1;
      const n = ac.createBufferSource(); n.buffer = buf; n.loop = true;
      const bf = ac.createBiquadFilter(); bf.type = type; bf.frequency.value = f;
      const gn = ac.createGain(); gn.gain.value = g; n.connect(bf).connect(gn).connect(master); n.start(); srcs.push(n);
    };
    const tone = (type: OscillatorType, f: number, g: number, wob = 0) => {
      const o = ac.createOscillator(); o.type = type; o.frequency.value = f;
      const gn = ac.createGain(); gn.gain.value = g; o.connect(gn).connect(master);
      if (wob) { const l = ac.createOscillator(); l.frequency.value = wob; const lg = ac.createGain(); lg.gain.value = f * .015; l.connect(lg).connect(o.frequency); l.start(); srcs.push(l); }
      o.start(); srcs.push(o);
    };
    if (i === 0) { noise('highpass', 3500, .25); tone('sine', 6400, .12, 7); tone('sine', 3200, .04, 5); }
    if (i === 1) { noise('lowpass', 900, .5); noise('bandpass', 2200, .12); }
    if (i === 2) { noise('bandpass', 4200, .2); tone('triangle', 5100, .08, 50); }
    if (i === 3) { tone('sawtooth', 420, .06, 3); noise('bandpass', 1500, .12); }
    const t = setTimeout(stop, 7000);
    nodes.current = { master, lp, stop: () => { clearTimeout(t); srcs.forEach(s => { try { s.stop(); } catch { /* already stopped */ } }); master.disconnect(); } };
    setPlaying(i);
  };

  useEffect(() => {
    const n = nodes.current; if (!n || !ctx.current) return;
    const now = ctx.current.currentTime;
    n.master.gain.setTargetAtTime(quiet ? 0.06 : 0.5, now, .15);
    n.lp.frequency.setTargetAtTime(quiet ? 1100 : 16000, now, .15);
  }, [quiet]);
  useEffect(() => () => stop(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="sec dark" id="posluchaj"><div className="wrap g2" style={{ alignItems: 'start' }}>
      <div className="rv">
        <p className="k">Posłuchaj, zanim przyjdziesz</p>
        <h2>Najbardziej boimy się<br /><em>dźwięku, nie bólu.</em></h2>
        <p className="lead" style={{ margin: '24px 0 32px' }}>Nagraliśmy każde urządzenie w gabinecie. Posłuchaj w domu, na spokojnie, z herbatą. A potem przełącz na wersję, którą usłyszysz w naszych słuchawkach z redukcją szumów.</p>
        <div className="toggle" role="group" aria-label="Wersja dźwięku">
          <button aria-pressed={!quiet} onClick={() => setQuiet(false)}>Tak to brzmi</button>
          <button aria-pressed={quiet} onClick={() => setQuiet(true)}>W słuchawkach</button>
        </div>
        <p className="quote" style={{ color: 'var(--mint)', marginTop: 'clamp(10px,2.67vh,24px)', maxWidth: 440 }}>Wersja w słuchawkach jest o 22 dB cichsza. Słychać ją jak deszcz za oknem.</p>
        <p className="fine" style={{ color: '#9FBFB2', fontSize: 14, marginTop: 'clamp(10px,4.44vh,40px)', maxWidth: 440 }}>Dźwięki odtworzone na podstawie nagrań z gabinetu. Słuchawki dostajesz przy każdej wizycie, razem z pilotem do serialu.</p>
      </div>
      <div className="sounds rv">
        {SOUNDS.map((s, i) => (
          <article className={`sound${playing === i ? ' playing' : ''}`} key={s.name}>
            <header>
              <button className={`play${playing === i ? ' on' : ''}`} onClick={() => play(i)} aria-label={`${playing === i ? 'Zatrzymaj' : 'Odtwórz'}: ${s.name}`}>
                {playing === i ? <svg viewBox="0 0 20 20"><rect x="4" y="3" width="4" height="14" /><rect x="12" y="3" width="4" height="14" /></svg> : <svg viewBox="0 0 20 20"><polygon points="5,2 18,10 5,18" /></svg>}
              </button>
              <h3>{s.name}</h3>
            </header>
            <div className="wave" aria-hidden="true">
              {bars(i).map((h, k) => <i key={k} style={{ height: `${h * s.peak * (quiet ? .32 : 1)}%`, animationDelay: `${(k % 7) * .08}s` }} />)}
            </div>
            <div className="db"><b>{quiet ? s.quiet : s.db} dB</b><span>{quiet ? `zamiast ${s.db} dB` : `→ ${s.quiet} dB w słuchawkach`}</span></div>
            <p className="it" style={{ color: '#CFE0D8', fontSize: 19 }}>{s.like}</p>
          </article>
        ))}
      </div>
    </div></section>
  );
}
