import type { Metadata } from 'next';
import Img from '@/components/Img';
import ContactForm from '@/components/ContactForm';
import { MAIL, PHONE } from '@/lib/base';

export const metadata: Metadata = { title: 'Kontakt', description: 'Gabinet Mięta, ul. Limanowskiego 12, Kraków Podgórze. Pon–pt 8–20, sob 9–14. Tramwaje 3, 6, 24, parking dla pacjentów.' };

export default function Contact() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <p className="k rv in">Kontakt</p><h1 className="rv in">Wpadnij,<br /><em>zadzwoń, napisz.</em></h1>
        <div className="g3 rv in" style={{ marginTop: 56 }}>
          {[['Telefon', PHONE, 'odbieramy pon–pt 8–20', `tel:${PHONE.replace(/\s/g, '')}`], ['Adres', 'ul. Limanowskiego 12', 'Kraków Podgórze, parter, bez schodów', 'https://maps.google.com/?q=Limanowskiego+12+Krak%C3%B3w'], ['E-mail', MAIL, 'odpisujemy w ciągu 2 godzin', `mailto:${MAIL}`]].map(([k, v, s, h]) => (
            <a key={k} href={h} style={{ borderTop: '1px solid var(--line)', paddingTop: 20 }}><p className="k">{k}</p><p className="h3" style={{ margin: '8px 0' }}>{v}</p><p style={{ color: 'var(--grey)' }}>{s}</p></a>
          ))}
        </div>
      </div></section>
      <section className="sec soft"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv">
          <div className="map"><svg viewBox="0 0 640 420" role="img" aria-label="Mapa dojazdu do gabinetu Mięta, ul. Limanowskiego 12">
            <rect width="640" height="420" fill="#E6F2EC" />
            {Array.from({ length: 9 }, (_, i) => <line key={i} x1={i * 80} y1="0" x2={i * 80 + 60} y2="420" stroke="#fff" strokeWidth="10" />)}
            <rect x="0" y="250" width="640" height="34" fill="#CFE8DC" /><text x="24" y="272" fontFamily="DM Sans Variable, sans-serif" fontSize="13" fill="#1F4D3F">ul. Limanowskiego</text>
            <circle cx="330" cy="228" r="28" fill="#1F4D3F" /><text x="330" y="236" textAnchor="middle" fontFamily="Fraunces Variable, serif" fontStyle="italic" fontSize="24" fill="#fff">m</text>
          </svg></div>
          <ul className="price-list" style={{ marginTop: 24 }}>{[['Tramwaj', '3, 6, 24 · przystanek Limanowskiego, 2 min pieszo'], ['Samochód', '3 miejsca dla pacjentów na podwórzu'], ['Rower', 'stojak przed wejściem'], ['Wózek', 'wejście z poziomu chodnika, łazienka dostosowana']].map(([a, b]) => <li key={a}><span><b style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 600 }}>{a}</b><small>{b}</small></span></li>)}</ul>
        </div>
        <div className="rv"><Img n="k01" alt="Wejście do gabinetu od ulicy, zielone drzwi" ratio="4/3" />
          <ul className="price-list" style={{ marginTop: 24 }}>{[['poniedziałek – piątek', '8:00 – 20:00'], ['sobota', '9:00 – 14:00'], ['niedziela', 'nieczynne'], ['nagły ból zęba', 'tego samego dnia']].map(([a, b]) => <li key={a}><span>{a}</span><b style={{ fontSize: 20 }}>{b}</b></li>)}</ul></div>
      </div></section>
      <section className="sec dark"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv"><h2>Wolisz napisać?</h2><p className="lead" style={{ marginTop: 14 }}>Odpiszemy w 2 godziny w dni robocze.</p></div>
        <ContactForm />
      </div></section>
    </>
  );
}
