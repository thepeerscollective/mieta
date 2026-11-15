import type { Metadata } from 'next';
import Img from '@/components/Img';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Leczenie kanałowe pod mikroskopem', description: 'Ratujemy ząb, który inni chcą usunąć. Leczenie kanałowe pod mikroskopem, zwykle na jednej wizycie. Ceny od 1 400 zł.' };

const FAQ = [
  ['Czy to boli?', 'Nie. Ząb jest w pełni znieczulony. Po leczeniu może być lekko wrażliwy przez 2–3 dni.'],
  ['Czy nie lepiej usunąć?', 'Własny ząb jest zawsze lepszy niż implant, a leczenie kanałowe jest tańsze niż implant z koroną.'],
  ['Ile wizyt?', 'Zwykle jedna. Przy stanie zapalnym dwie, z lekiem w kanale na 1–2 tygodnie.'],
  ['Czy mogę jeść po zabiegu?', 'Tak, po ustąpieniu znieczulenia, około 2 godzin.'],
];

export default function RootCanal() {
  return (
    <>
      <section className="hero"><div className="wrap g2">
        <div className="rv in"><p className="k">Leczenie / Endodoncja</p><h1>Leczenie kanałowe<br /><em>pod mikroskopem.</em></h1>
          <p className="lead">Ratujemy ząb, który inni chcą usunąć. Pod mikroskopem widzimy kanały 25 razy większe, więc leczenie jest dokładniejsze i zwykle kończy się na jednej wizycie.</p>
          <div className="g3" style={{ margin: '36px 0', gap: 16 }}>{[['1–2', 'wizyty'], ['90–120', 'minut'], ['94%', 'skuteczność po 5 latach']].map(([a, b]) => <div key={b}><b className="h2">{a}</b><p style={{ color: 'var(--grey)', fontSize: 15 }}>{b}</p></div>)}</div>
          <a className="btn b-green" href={href('/rezerwacja/?lekarz=kruk&powod=kanałowe')}>Umów konsultację endodontyczną</a></div>
        <div className="rv in"><Img n="l10" alt="Mikroskop stomatologiczny nad fotelem" arch ratio="4/5" eager /></div>
      </div></section>

      <section className="sec dark"><div className="wrap">
        <h2 className="rv" style={{ marginBottom: 32 }}>Jak to wygląda, krok po kroku.</h2>
        <ol className="steps rv">
          {[['Znieczulenie', 'Żel, potem cienka igła. Czekamy, aż ząb jest zupełnie „cichy”.'], ['Koferdam', 'Cienka gumowa osłona izoluje ząb. Nic nie spływa do gardła.'], ['Oczyszczenie kanałów', 'Pod mikroskopem, mechanicznie i płukaniem. To najdłuższa część.'], ['Wypełnienie', 'Kanały zamykamy na ciepło. Ząb dostaje szczelną odbudowę.'], ['Kontrola', 'Zdjęcie RTG po leczeniu i kontrola po 6 i 12 miesiącach.']].map(([h, p], i) => (
            <li key={h}><span className="n">0{i + 1}</span><h3>{h}</h3><p>{p}</p></li>
          ))}
        </ol>
      </div></section>

      <section className="sec"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv"><h2>Ile kosztuje.</h2><p className="lead" style={{ marginTop: 14 }}>Cena zależy od liczby kanałów. Podajemy ją przed leczeniem, po zdjęciu RTG.</p></div>
        <ul className="price-list rv">{[['Ząb przedni · 1 kanał', '1 400 zł'], ['Przedtrzonowiec · 2 kanały', '1 700 zł'], ['Trzonowiec · 3–4 kanały', '2 200 zł'], ['Ponowne leczenie (re-endo)', '+ 400 zł'], ['Odbudowa po leczeniu', 'od 450 zł']].map(([a, b]) => <li key={a}><span>{a}</span><b>{b}</b></li>)}</ul>
      </div></section>

      <section className="sec soft"><div className="wrap g2">
        <div className="rv"><Img n="m03" alt="Lek. dent. Tomasz Kruk przy mikroskopie" arch ratio="4/5" /></div>
        <div className="rv"><p className="k">Leczy</p><h2>lek. dent. Tomasz Kruk</h2><p className="lead" style={{ margin: '20px 0 32px' }}>Endodoncja od 2014 roku, ponad 3 000 wyleczonych kanałów. Uczy endodoncji na kursach dla lekarzy. Po pracy piecze chleb na zakwasie.</p><a className="btn b-green" href={href('/rezerwacja/?lekarz=kruk')}>Umów się do dr. Kruka</a></div>
      </div></section>

      <section className="sec"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <h2 className="rv">Pytania o leczenie kanałowe.</h2>
        <div className="faq rv">{FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>
    </>
  );
}
