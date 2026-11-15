'use client';
import { useEffect, useState } from 'react';
import { href } from '@/lib/base';

/** Hero card: the nearest free appointment, computed relative to today. */
export default function NextSlot() {
  const [label, setLabel] = useState('Jutro, 9:30');
  useEffect(() => {
    const t = new Date(); t.setDate(t.getDate() + 1);
    setLabel(t.getDay() === 0 ? 'Poniedziałek, 9:30' : 'Jutro, 9:30');
  }, []);
  return (
    <div className="slot">
      <p className="k"><span className="dot" />Wolny termin</p>
      <b>{label}</b>
      <p>lek. dent. Anna Mięta</p>
      <a className="link" href={href('/rezerwacja/')}>Zarezerwuj →</a>
    </div>
  );
}
