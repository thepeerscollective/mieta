'use client';
import Lang from '@/components/Lang';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ADDRESS, HOURS, MAIL, PHONE, href } from '@/lib/base';

const NAV: [string, string][] = [['/pierwsza-wizyta/', 'Pierwsza wizyta'], ['/leczenie/', 'Leczenie'], ['/cennik/', 'Cennik'], ['/zespol/', 'Zespół'], ['/kontakt/', 'Kontakt']];

export function Header() {
  const path = usePathname() ?? '';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => { setScrolled(scrollY > 8); const m = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty('--p', String(m > 0 ? scrollY / m : 0)); }; f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className={`nav${open ? ' open' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <a className="logo" href={href('/')} aria-label="Mięta, strona główna"><b>mięta</b></a>
        <nav aria-label="Główna"><ul>
          {NAV.map(([p, l]) => <li key={p}><a href={href(p)} aria-current={path.startsWith(p.slice(0, -1)) ? 'page' : undefined}>{l}</a></li>)}
        </ul></nav>
        <Lang />
        <a className="btn b-green" href={href('/rezerwacja/')}>Umów wizytę</a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot"><div className="wrap">
      <div className="foot-grid">
        <div><a className="logo" href={href('/')}><b>mięta</b></a><p>{ADDRESS}<br />{HOURS}<br /><a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a><br /><a href={`mailto:${MAIL}`}>{MAIL}</a></p></div>
        <ul><li><a href={href('/pierwsza-wizyta/')}>Pierwsza wizyta</a></li><li><a href={href('/leczenie/')}>Leczenie</a></li><li><a href={href('/cennik/')}>Cennik</a></li></ul>
        <ul><li><a href={href('/zespol/')}>Zespół</a></li><li><a href={href('/kontakt/')}>Kontakt</a></li><li><a href={href('/rezerwacja/')}>Umów wizytę</a></li></ul>
        <ul><li><a href={href('/cennik/')}>Raty 0%</a></li><li><a href="#">Polityka prywatności</a></li><li><a href="#">Instagram</a></li></ul>
      </div>
      <div className="foot-bottom">Gabinet bez barier · parking dla pacjentów · płatność kartą i BLIK · © {new Date().getFullYear()} · projekt: peers</div>
    </div></footer>
  );
}

/** Fades sections in as they scroll into view. */
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
