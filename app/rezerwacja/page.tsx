import type { Metadata } from 'next';
import Booking from '@/components/Booking';

export const metadata: Metadata = { title: 'Umów wizytę', description: 'Umów wizytę w gabinecie Mięta w trzech krokach: powód wizyty, lekarz i termin, Twoje dane. Około minuty.' };

export default function Book() {
  return (
    <section className="hero"><div className="wrap">
      <p className="k rv in">Umów wizytę · 3 kroki · ok. 1 minuta</p>
      <h1 className="rv in" style={{ marginBottom: 'clamp(10px,4.44vh,40px)' }}>Wybierz, co Ci<br /><em>najbardziej pasuje.</em></h1>
      <Booking />
    </div></section>
  );
}
