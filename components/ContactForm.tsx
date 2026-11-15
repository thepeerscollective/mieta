'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="done-box" style={{ color: 'var(--green)' }}><h3>Dziękujemy.</h3><p style={{ marginTop: 8 }}>Odpiszemy w ciągu 2 godzin.</p></div>;
  return (
    <form className="form rv" onSubmit={e => { e.preventDefault(); setSent(true); }}>
      <div className="g2" style={{ gap: 18 }}>
        <div className="field"><label htmlFor="c-n">Imię</label><input id="c-n" required autoComplete="given-name" /></div>
        <div className="field"><label htmlFor="c-c">Telefon lub e-mail</label><input id="c-c" required /></div>
      </div>
      <div className="field"><label htmlFor="c-m">Wiadomość</label><textarea id="c-m" rows={4} required /></div>
      <button className="btn b-peach" type="submit" style={{ justifySelf: 'start' }}>Wyślij</button>
    </form>
  );
}
