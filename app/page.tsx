import Img from '@/components/Img';
import Listen from '@/components/Listen';
import DayStrip from '@/components/DayStrip';
import NextSlot from '@/components/NextSlot';
import { TEAM, TREATMENTS } from '@/lib/data';
import { href } from '@/lib/base';

export default function Home() {
  return (
    <>
      <section className="hero"><div className="wrap g2">
        <div className="rv in">
          <h1>Dentysta, do którego<br /><em>nie trzeba się zbierać.</em></h1>
          <p className="lead">Spokojny gabinet, ceny znane przed leczeniem i lekarze, którzy najpierw rozmawiają, a potem leczą. Także dla tych, którzy nie byli u dentysty od lat.</p>
          <div className="row" style={{ marginTop: 36 }}><a className="btn b-green" href={href('/rezerwacja/?powod=pierwsza')}>Umów pierwszą wizytę</a><a className="btn b-line" href={href('/cennik/')}>Zobacz cennik</a></div>
          <div className="rating"><b>4,9</b><span>średnia z 1 214 opinii<br />Google i ZnanyLekarz</span></div>
        </div>
        <div className="hero-img rv in">
          <Img n="m01" alt="Jasny gabinet stomatologiczny z łukowym oknem, rośliny i dwoje lekarzy" arch ratio="4/5" eager />
          <NextSlot />
        </div>
      </div></section>

      <section style={{ paddingBottom: 'clamp(72px,9vw,128px)' }}><div className="wrap g3">
        {[['zł', 'Cena przed leczeniem', 'Dostajesz plan z ceną każdego etapu, zanim cokolwiek zaczniemy.'], ['~', 'Znieczulenie, które działa', 'Najpierw żel, potem cienka igła. I czekamy, aż naprawdę zadziała.'], ['0', 'Pierwsza wizyta za 0 zł', 'Rozmowa bez fotela. Poznasz lekarza, zanim zdecydujesz.']].map(([i, t, d]) => (
          <div className="card promise rv" key={t}><div className="ic">{i}</div><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div></section>

      <section className="sec dark"><div className="wrap">
        <div className="rv"><p className="k">Boisz się dentysty?</p><h2>To normalne.<br /><em>Tak wygląda u nas wizyta.</em></h2></div>
        <div className="journey rv">
          {[['01', 'Kawa i rozmowa', 'Pierwsze 15 minut na kanapie, nie na fotelu.'], ['02', 'Plan i cena na kartce', 'Zabierasz go do domu i decydujesz na spokojnie.'], ['03', 'Znieczulenie, które działa', 'Żel, cienka igła, słuchawki z Twoją muzyką.'], ['04', 'Podnosisz rękę, przerywamy', 'Umawiamy się na znak stop. Zawsze działa.']].map(([n, t, d]) => (
            <div key={n}><span className="n">{n}</span><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <a className="btn b-mint" href={href('/pierwsza-wizyta/')}>Jak wygląda pierwsza wizyta →</a>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head rv"><div><h2>W czym pomagamy</h2><p className="lead" style={{ marginTop: 14 }}>Od przeglądu po implant. Wszystko w jednym gabinecie, bez odsyłania dalej.</p></div><a className="link" href={href('/leczenie/')}>Wszystkie zabiegi →</a></div>
        <div className="treat">
          {TREATMENTS.map(t => (
            <a className="rv" key={t.slug} href={href(t.slug === 'kanalowe' ? '/leczenie/kanalowe/' : `/leczenie/#${t.slug}`)}>
              <span className="k">{t.n}</span><h3>{t.title}</h3><p>{t.short}</p><span className="link" style={{ justifySelf: 'start', marginTop: 8 }}>Więcej →</span>
            </a>
          ))}
        </div>
      </div></section>

      <Listen />

      <section className="sec soft"><div className="wrap g2">
        <div className="rv"><h2>Ceny, zanim<br /><em>zapytasz.</em></h2><a className="btn b-green" style={{ marginTop: 32 }} href={href('/cennik/')}>Pełny cennik →</a></div>
        <ul className="price-list rv">
          {[['Wizyta zapoznawcza', '0 zł'], ['Przegląd z planem leczenia', '180 zł'], ['Higienizacja', '380 zł'], ['Wypełnienie', '350–550 zł'], ['Leczenie kanałowe', '1 400–2 200 zł']].map(([a, b]) => <li key={a}><span>{a}</span><b>{b}</b></li>)}
        </ul>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head rv"><h2>Ludzie, nie fartuchy.</h2><a className="link" href={href('/zespol/')}>Cały zespół →</a></div>
        <div className="g3">
          {TEAM.slice(0, 3).map(d => (
            <div className="person rv" key={d.id}><Img n={d.img} alt={`Portret: ${d.name}`} arch /><h3>{d.name}</h3><p>{d.role} · {d.after}</p></div>
          ))}
        </div>
      </div></section>

      <section className="sec soft"><div className="wrap">
        <h2 className="rv" style={{ marginBottom: 48 }}>Co mówią ci, którzy się bali.</h2>
        <div className="g3">
          {[['„Nie byłem u dentysty 9 lat. Pierwsza wizyta to była serio tylko rozmowa. Teraz chodzę co pół roku.”', 'Kuba, 34'], ['„Dostałam plan leczenia z cenami na kartce. Nikt mnie nie naciskał. To zmienia wszystko.”', 'Ola, 41'], ['„Syn mówi, że to dentysta z kanapą. Nie płacze. To wystarczy za opinię.”', 'Monika, mama Stasia']].map(([q, a]) => (
            <figure className="card rv" key={a}><blockquote className="quote">{q}</blockquote><figcaption style={{ marginTop: 20, fontWeight: 500 }}>{a}</figcaption></figure>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap g2">
        <div className="rv"><h2>Umów się w 30 sekund.</h2><p className="lead" style={{ marginTop: 16 }}>Bez dzwonienia i czekania na oddzwonienie.</p></div>
        <div className="rv"><DayStrip /></div>
      </div></section>

      <section className="sec soft"><div className="wrap">
        <h2 className="rv" style={{ marginBottom: 48 }}>Gabinet, w którym da się odetchnąć.</h2>
        <div className="g2" style={{ alignItems: 'start' }}>
          <div className="rv"><Img n="m05" alt="Poczekalnia jak salon: kanapa, rośliny, łukowe przejście" ratio="4/3" /></div>
          <div className="g2 rv" style={{ gap: 20 }}>
            <Img n="m06" alt="Fotel stomatologiczny przy dużym oknie" arch ratio="3/4" />
            <Img n="m07" alt="Herbata i woda na stoliku w poczekalni" arch ratio="3/4" />
            <div style={{ gridColumn: '1/-1' }}><Img n="m08" alt="Słuchawki i pilot do serialu przy fotelu" ratio="16/9" /></div>
          </div>
        </div>
      </div></section>
    </>
  );
}
