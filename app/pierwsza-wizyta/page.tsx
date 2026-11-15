import type { Metadata } from 'next';
import Img from '@/components/Img';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Pierwsza wizyta', description: 'Nie byłeś u dentysty od lat? Pierwsza wizyta w Mięcie to 60 minut rozmowy, spokojny przegląd i plan z ceną. Bezpłatnie.' };

const FAQ = [
  ['Wstydzę się stanu moich zębów.', 'Widzieliśmy wszystko. Nie oceniamy, tylko planujemy. Większość naszych pacjentów zaczynała od „nie byłem od lat”.'],
  ['Czy będzie bolało?', 'Nie powinno. Jeśli coś czujesz, mówisz i dokładamy znieczulenia. Zawsze.'],
  ['A jeśli nie stać mnie na całe leczenie?', 'Rozkładamy plan na etapy i raty 0%. Zaczynamy od tego, co najpilniejsze.'],
  ['Mam odruch wymiotny.', 'Mamy na to sposoby: krótsze etapy, spray znieczulający, pozycja półsiedząca.'],
];

export default function FirstVisit() {
  return (
    <>
      <section className="hero"><div className="wrap g2">
        <div className="rv in"><p className="k">Pierwsza wizyta · 60 minut · 0 zł</p><h1>Nie byłeś u dentysty od lat?<br /><em>Zacznijmy od rozmowy.</em></h1>
          <p className="lead">Pierwsza wizyta nie ma nic wspólnego z wiertłem. Siadasz na kanapie, mówisz, co Cię martwi, a my pokazujemy, co da się zrobić i ile to kosztuje.</p>
          <a className="btn b-green" style={{ marginTop: 'clamp(10px,3.56vh,32px)' }} href={href('/rezerwacja/?powod=pierwsza')}>Umów wizytę zapoznawczą</a></div>
        <div className="rv in"><Img n="m10" alt="Pacjentka rozmawia z dentystką na kanapie w poczekalni" arch ratio="4/5" eager /></div>
      </div></section>

      <section className="sec soft"><div className="wrap">
        <h2 className="rv" style={{ marginBottom: 'clamp(10px,5.33vh,48px)' }}>Co się wydarzy w ciągu godziny.</h2>
        <div className="mins">
          {[['0–15 min', 'Rozmowa na kanapie', 'Opowiadasz, co Cię boli i czego się boisz. Nic nie oglądamy, jeśli nie chcesz.', 25], ['15–30 min', 'Spokojny przegląd', 'Lusterko, lampka i zdjęcie panoramiczne. Bez wiercenia, bez zastrzyków.', 50], ['30–45 min', 'Plan i cena na kartce', 'Pokazujemy zdjęcie na ekranie, tłumaczymy po ludzku i rozpisujemy koszty.', 75], ['45–60 min', 'Twoje pytania', 'Pytasz o wszystko. Plan zabierasz do domu i decydujesz, kiedy chcesz.', 100]].map(([t, h, p, w]) => (
            <div className="rv" key={t as string}><span className="t">{t}</span><h3>{h}</h3><p>{p}</p><div className="bar"><i style={{ width: `${w}%` }} /></div></div>
          ))}
        </div>
        <p className="quote rv" style={{ marginTop: 'clamp(10px,4.44vh,40px)' }}>Ile to kosztuje? Nic. Pierwsza wizyta jest bezpłatna i do niczego nie zobowiązuje.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="rv" style={{ marginBottom: 'clamp(10px,5.33vh,48px)' }}><h2>Twoje prawa w fotelu.</h2><p className="lead" style={{ marginTop: 14 }}>Spisaliśmy je, żebyś nie musiał prosić.</p></div>
        <div className="rights">
          {[['Prawo do stopu', 'Podnosisz rękę, przerywamy natychmiast. Bez pytań.'], ['Prawo do przerwy', 'Możesz wstać, napić się wody, wyjść na chwilę.'], ['Prawo do wiedzy', 'Przed każdym krokiem mówimy, co zrobimy i jak to poczujesz.'], ['Prawo do odmowy', 'Nie musisz zgodzić się na plan. Nie zmienia to naszego podejścia.'], ['Prawo do znieczulenia', 'Każde leczenie może być w znieczuleniu, także higienizacja.'], ['Prawo do towarzystwa', 'Może z Tobą wejść bliska osoba.']].map(([h, p], i) => (
            <div className="rv" key={h}><span className="p">§ {i + 1}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </div></section>

      <section className="sec dark"><div className="wrap">
        <h2 className="rv" style={{ marginBottom: 'clamp(10px,5.33vh,48px)' }}>Kiedy strach jest<br /><em>naprawdę duży.</em></h2>
        <div className="g3">
          {[['Gaz rozweselający', 'Podtlenek azotu przez maseczkę. Jesteś przytomny, ale spokojny. Działa po 3 minutach, znika po 5.', '+150 zł'], ['Sedacja dożylna', 'Z anestezjologiem. Pamiętasz niewiele. Dobra przy dużych zabiegach.', '+900 zł'], ['Wizyta adaptacyjna', 'Kilka krótkich spotkań bez leczenia, żeby przyzwyczaić się do gabinetu.', '0 zł']].map(([h, p, c]) => (
            <div className="rv" key={h} style={{ borderTop: '1px solid #3B6A5C', paddingTop: 24 }}><h3>{h}</h3><p style={{ color: '#CFE0D8', margin: '10px 0 18px' }}>{p}</p><b className="h3" style={{ color: 'var(--peach)' }}>{c}</b></div>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <h2 className="rv">Pytania, które wstydzisz się zadać.</h2>
        <div className="faq rv">{FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>

      <section className="sec soft"><div className="wrap" style={{ textAlign: 'center' }}>
        <h2 className="rv">Zacznij od kawy.</h2>
        <p className="lead rv" style={{ margin: '14px auto 32px' }}>Wizyta zapoznawcza · 60 minut · 0 zł</p>
        <a className="btn b-green rv" href={href('/rezerwacja/?powod=pierwsza')}>Umów wizytę zapoznawczą</a>
      </div></section>
    </>
  );
}
