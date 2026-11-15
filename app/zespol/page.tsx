import type { Metadata } from 'next';
import Img from '@/components/Img';
import { TEAM } from '@/lib/data';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Zespół', description: 'Sześć osób, jeden gabinet. Każdy lekarz ma swoją specjalizację, ale pacjent ma jednego opiekuna od pierwszej rozmowy do końca leczenia.' };

export default function Team() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <p className="k rv in">Zespół</p><h1 className="rv in">Ludzie, którzy<br /><em>nie mówią „proszę szerzej”.</em></h1>
        <p className="lead rv in" style={{ marginTop: 24 }}>Sześć osób, jeden gabinet. Każdy lekarz ma swoją specjalizację, ale pacjent ma jednego opiekuna od pierwszej rozmowy do końca leczenia.</p>
      </div></section>
      <section style={{ paddingBottom: 'clamp(72px,9vw,128px)' }}><div className="wrap g3" style={{ rowGap: 64 }}>
        {TEAM.map(d => (
          <article className="person rv" key={d.id}>
            <Img n={d.img} alt={`Portret: ${d.name}`} arch />
            <h3>{d.name}</h3><p className="k" style={{ margin: '6px 0 10px' }}>{d.role}</p><p>{d.bio}</p>
            {d.name.startsWith('lek.') && <a className="link" style={{ display: 'inline-block', marginTop: 14 }} href={href(`/rezerwacja/?lekarz=${d.id}`)}>Umów się →</a>}
          </article>
        ))}
      </div></section>
      <section className="sec soft"><div className="wrap"><p className="quote rv" style={{ fontSize: 'clamp(28px,3.4vw,48px)', maxWidth: 1000 }}>„Nikt nie dostanie u nas planu leczenia, którego nie rozumie.”</p><p className="k rv" style={{ marginTop: 20 }}>zasada nr 1 gabinetu Mięta</p></div></section>
      <section className="sec"><div className="wrap g2"><div className="rv"><h2>Szukamy asystentki stomatologicznej.</h2><p className="lead" style={{ marginTop: 16 }}>Pełen etat, grafik bez sobót co drugi tydzień, szkolenia opłacane przez gabinet.</p></div><div className="rv"><a className="btn b-line" href="mailto:praca@mieta.pl">Napisz do nas</a></div></div></section>
    </>
  );
}
