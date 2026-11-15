import { BASE } from '@/lib/base';

export default function NotFound() {
  return (
    <section className="sec"><div className="wrap">
      <p className="k">404</p>
      <h1>Tej strony<br /><em>nie ma w gabinecie.</em></h1>
      <p className="lead" style={{ margin: '24px 0 32px' }}>Może adres ma literówkę. Zęby na pewno są w porządku.</p>
      <div className="row"><a className="btn b-green" href={`${BASE}/rezerwacja/`}>Umów wizytę</a><a className="btn b-line" href={`${BASE}/`}>Strona główna</a></div>
    </div></section>
  );
}
