import type { Metadata } from 'next';
import { PRICES } from '@/lib/data';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Cennik', description: 'Pełny cennik gabinetu Mięta: wizyta zapoznawcza 0 zł, przegląd 180 zł, higienizacja 380 zł, leczenie kanałowe od 1 400 zł. Raty 0%.' };

export default function Prices() {
  return (
    <>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'end' }}>
        <div className="rv in"><p className="k">Cennik · aktualny od 1.10.2026</p><h1>Ceny, zanim<br /><em>zapytasz.</em></h1></div>
        <p className="lead rv in">Bez „od” bez końca i bez „zależy”. Jeśli coś może kosztować więcej, piszemy dlaczego.</p>
      </div></section>
      <section style={{ paddingBottom: 'clamp(72px,9vw,128px)' }}><div className="wrap" style={{ display: 'grid', gap: 56 }}>
        {PRICES.map(([g, items]) => (
          <div className="g2 rv" key={g} style={{ alignItems: 'start', gridTemplateColumns: '1fr 2fr' }}>
            <h2 className="h3" style={{ fontSize: 'clamp(28px,2.6vw,40px)', fontWeight: 300 }}>{g}</h2>
            <ul className="price-list">{items.map(([a, b, c]) => <li key={a}><span>{a}<small>{c}</small></span><b>{b}</b></li>)}</ul>
          </div>
        ))}
        <div className="card rv" style={{ background: 'var(--mint-l)' }}><p className="quote">Ceny są ostateczne. Jeśli w trakcie leczenia okaże się, że trzeba zrobić więcej, najpierw rozmawiamy i dopiero potem robimy.</p></div>
        <div className="row rv"><a className="btn b-green" href={href('/rezerwacja/')}>Umów wizytę</a><a className="btn b-line" href={href('/pierwsza-wizyta/')}>Pierwsza wizyta za 0 zł</a></div>
      </div></section>
    </>
  );
}
