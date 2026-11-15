import type { Metadata } from 'next';
import Img from '@/components/Img';
import { TREATMENTS } from '@/lib/data';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Leczenie', description: 'Profilaktyka, leczenie zachowawcze, endodoncja pod mikroskopem, estetyka, protetyka i implanty oraz stomatologia dziecięca w jednym gabinecie.' };

export default function Treatments() {
  return (
    <>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'end' }}>
        <div className="rv in"><p className="k">Leczenie</p><h1>Wszystko w jednym<br /><em>gabinecie.</em></h1></div>
        <p className="lead rv in">Bez odsyłania do innych specjalistów i bez pięciu różnych recepcji. Jedna karta, jeden opiekun, jeden plan.</p>
      </div></section>
      {TREATMENTS.map((t, i) => (
        <section className={`sec${i % 2 ? ' soft' : ''}`} id={t.slug} key={t.slug} style={{ paddingTop: i ? undefined : 24 }}>
          <div className="wrap g2">
            <div className="rv" style={{ order: i % 2 ? 2 : 1 }}><Img n={t.img} alt={t.title} arch={i % 2 === 0} ratio="4/3" /></div>
            <div className="rv" style={{ order: i % 2 ? 1 : 2 }}>
              <span className="h2" style={{ color: 'var(--mint)' }}>{t.n}</span>
              <h2 style={{ margin: '8px 0 24px' }}>{t.title}</h2>
              <ul className="price-list">{t.items.map(x => <li key={x}><span>{x}</span></li>)}</ul>
              <div className="row" style={{ marginTop: 'clamp(10px,3.11vh,28px)' }}>
                <b className="h3">{t.from}</b>
                <a className="btn b-green" href={href(t.slug === 'kanalowe' ? '/leczenie/kanalowe/' : '/cennik/')}>Szczegóły i ceny →</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
