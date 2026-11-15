'use client';
import { useEffect, useState } from 'react';
import { href } from '@/lib/base';

const D = ['nd', 'pon', 'wt', 'śr', 'czw', 'pt', 'sob'];

/** Next five working days with the number of free slots, linking to the booking flow. */
export default function DayStrip() {
  const [days, setDays] = useState<{ d: Date; free: number }[]>([]);
  const [sel, setSel] = useState(0);
  useEffect(() => {
    const out: { d: Date; free: number }[] = []; const t = new Date();
    while (out.length < 5) { t.setDate(t.getDate() + 1); if (t.getDay() !== 0) out.push({ d: new Date(t), free: 2 + ((t.getDate() * 7) % 5) }); }
    setDays(out);
  }, []);
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div className="days" role="group" aria-label="Najbliższe dni">
        {days.map((x, i) => (
          <button key={i} className="day" aria-pressed={sel === i} onClick={() => setSel(i)}>
            <span>{D[x.d.getDay()]}</span><b>{x.d.getDate()}</b><span>{x.free} wolne</span>
          </button>
        ))}
      </div>
      <a className="btn b-green" style={{ justifySelf: 'start' }} href={href('/rezerwacja/')}>Wybierz godzinę →</a>
    </div>
  );
}
