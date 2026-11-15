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
          <p className="k">Stomatologia · Kraków Podgórze</p>
          <h1>Dentysta, do którego <em>nie trzeba się zbierać.</em></h1>
          <p className="lead">Spokojny gabinet, ceny znane przed leczeniem i lekarze, którzy najpierw rozmawiają, a potem leczą. Także dla tych, którzy nie byli u dentysty od lat.</p>
          <div className="row"><a className="btn b-green" href={href('/rezerwacja/?powod=pierwsza')}>Umów pierwszą wizytę</a><a className="btn b-line" href={href('/cennik/')}>Zobacz cennik</a></div>
          <dl className="facts"><div><dt>Opinie Google</dt><dd>4,9 · 1 214</dd></div><div><dt>Pierwsza wizyta</dt><dd>0 zł · 60 min</dd></div><div><dt>Otwarte</dt><dd>pn–pt 8–20</dd></div></dl>
        </div>
        <div className="hero-img rv in">
          <Img n="m01" alt="Jasny gabinet stomatologiczny z łukowym oknem, rośliny i dwoje lekarzy" arch ratio="4/5" eager />
          <NextSlot />
        </div>
      </div></section>

      <section className="promises"><div className="wrap">
        <ol className="prom rv">
          <li><span className="k">01</span><p>Cenę każdego etapu dostajesz <em>na kartce,</em> zanim cokolwiek zaczniemy.</p></li>
          <li><span className="k">02</span><p>Najpierw żel, potem cienka igła. Czekamy, <em>aż naprawdę zadziała.</em></p></li>
          <li><span className="k">03</span><p>Pierwsza wizyta to <em>rozmowa, nie fotel.</em> Kosztuje 0 zł.</p></li>
        </ol>
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
        <div className="tlist">
          <ol>
            {TREATMENTS.map(t => (
              <li key={t.slug} className="rv"><a href={href(t.slug === 'kanalowe' ? '/leczenie/kanalowe/' : `/leczenie/#${t.slug}`)} data-img={t.img}>
                <span className="k">{t.n}</span><span className="tt"><b>{t.title}</b><small>{t.short}</small></span><span className="pr">{t.from}</span><span className="ar" aria-hidden>→</span>
              </a></li>
            ))}
          </ol>
          <div className="tprev rv" aria-hidden>{TREATMENTS.map((t, i) => <div key={t.slug} className={`tp tp${i}`}><Img n={t.img} alt="" /></div>)}</div>
        </div>
      </div></section>

      <Listen />

      <section className="sec soft"><div className="wrap g2">
        <div className="rv"><h2>Ceny, zanim<br /><em>zapytasz.</em></h2><a className="btn b-green" style={{ marginTop: 'clamp(10px,3.56vh,32px)' }} href={href('/cennik/')}>Pełny cennik →</a></div>
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

      <section className="sec soft"><div className="wrap revs">
        <div className="rv">
          <h2>Co mówią ci, <em>którzy się bali.</em></h2>
          <p className="k" style={{ marginTop: 18 }}>Opinie Google · 4,9 z 1 214</p>
        </div>
        <figure className="rbig rv"><blockquote>„Nie byłem u dentysty 9 lat. Pierwsza wizyta to była serio tylko rozmowa. Teraz chodzę co pół roku.”</blockquote><figcaption><b>Kuba, 34</b><span>9 lat bez dentysty · leczenie zachowawcze</span></figcaption></figure>
        <div className="rsmall">
          <figure className="rv"><blockquote>„Dostałam plan leczenia z cenami na kartce. Nikt mnie nie naciskał.”</blockquote><figcaption><b>Ola, 41</b><span>plan leczenia · 6 wizyt</span></figcaption></figure>
          <figure className="rv"><blockquote>„Syn mówi, że to dentysta z kanapą. Nie płacze. To wystarczy za opinię.”</blockquote><figcaption><b>Monika, mama Stasia</b><span>dzieci · pierwsza wizyta</span></figcaption></figure>
        </div>
      </div></section>

      <section className="sec"><div className="wrap g2">
        <div className="rv"><h2>Umów się w 30 sekund.</h2><p className="lead" style={{ marginTop: 16 }}>Bez dzwonienia i czekania na oddzwonienie.</p></div>
        <div className="rv"><DayStrip /></div>
      </div></section>

      <section className="sec soft"><div className="wrap">
        <div className="head rv"><h2>Gabinet, w którym da się odetchnąć.</h2><p className="k">ul. Kalwaryjska · parter · bez schodów</p></div>
        <div className="place rv">
          {([['m05', 'Poczekalnia jak salon: kanapa, rośliny, stolik', '01 · poczekalnia', 'a'], ['m06', 'Fotel stomatologiczny przy dużym oknie', '02 · gabinet 1, okno na podwórze', 'b'], ['m07', 'Herbata i woda na stoliku w poczekalni', '03 · herbata, zanim zaczniemy', 'c'], ['m08', 'Słuchawki i pilot do serialu przy fotelu', '04 · słuchawki i serial przy fotelu', 'd']] as const).map(([n, alt, cap, area]) => (
            <figure key={n} style={{ gridArea: area }}><Img n={n} alt={alt} /><figcaption className="k">{cap}</figcaption></figure>
          ))}
        </div>
      </div></section>
    </>
  );
}
