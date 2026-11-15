'use client';
import { useEffect, useMemo, useState } from 'react';
import { TEAM } from '@/lib/data';
import { href } from '@/lib/base';

const REASONS = ['Pierwsza wizyta po przerwie · 0 zł', 'Przegląd · 180 zł', 'Higienizacja · 380 zł', 'Coś mnie boli', 'Leczenie kanałowe', 'Wizyta dziecka'];
const COMFORT = ['Bez dodatków', 'Słuchawki i koc', 'Gaz rozweselający +150 zł', 'Chcę najpierw porozmawiać'];
const DOCS = ['Dowolny · najszybszy termin', ...TEAM.slice(0, 4).map(d => d.name.replace('lek. dent. ', 'dr '))];
const HOURS = ['8:00', '9:30', '11:00', '13:30', '15:00', '17:30', '19:00'];
const PL_DAYS = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'];
const PL_MONTHS = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
const MONTHS = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

function Chips({ list, value, set }: { list: string[]; value: string; set: (v: string) => void }) {
  return <div className="chips">{list.map(l => <button key={l} type="button" className="chip" aria-pressed={value === l} onClick={() => set(l)}>{l}</button>)}</div>;
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState(REASONS[0]);
  const [comfort, setComfort] = useState(COMFORT[0]);
  const [doc, setDoc] = useState(DOCS[0]);
  const [today, setToday] = useState<Date | null>(null);
  const [day, setDay] = useState<Date | null>(null);
  const [hour, setHour] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const t = new Date(); t.setHours(0, 0, 0, 0); setToday(t);
    const q = new URLSearchParams(location.search);
    const d = q.get('lekarz'); if (d) { const m = DOCS.find(x => x.toLowerCase().includes(d)); if (m) setDoc(m); }
    const r = q.get('powod'); if (r) { const m = REASONS.find(x => x.toLowerCase().includes(r)); if (m) setReason(m); }
  }, []);

  const month = useMemo(() => {
    if (!today) return null;
    const off = today.getDate() > 22 ? 1 : 0;
    const first = new Date(today.getFullYear(), today.getMonth() + off, 1);
    const n = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = Array((first.getDay() + 6) % 7).fill(null);
    for (let i = 1; i <= n; i++) cells.push(new Date(first.getFullYear(), first.getMonth(), i));
    return { cells, label: `${MONTHS[first.getMonth()]} ${first.getFullYear()}` };
  }, [today]);

  const isFree = (d: Date) => !!today && d > today && d.getDay() !== 0 && (d.getDate() * 7) % 5 !== 0;
  const takenHour = (h: string) => !!day && (day.getDate() + h.length * 3 + parseInt(h)) % 4 === 0;
  const fmtDay = (d: Date) => `${PL_DAYS[d.getDay()]}, ${d.getDate()} ${PL_MONTHS[d.getMonth()]}`;

  const Stepper = (
    <div className="stepper" aria-label="Kroki rezerwacji">
      {['Powód wizyty', 'Lekarz i termin', 'Twoje dane'].map((l, i) => (
        <span key={l} className={step === i + 1 ? 'on' : step > i + 1 ? 'done' : ''}><i>{step > i + 1 ? '✓' : i + 1}</i>{l}</span>
      ))}
    </div>
  );

  if (step === 4) return (
    <div className="done-box rv in">
      <p className="k">Gotowe</p>
      <h2 style={{ margin: '14px 0' }}>Do zobaczenia, {name.split(' ')[0] || 'do zobaczenia'}.</h2>
      <p className="lead" style={{ margin: '0 auto 28px' }}>{day && fmtDay(day)}, {hour} · {doc}. Przypomnimy SMS-em dzień wcześniej. Jeśli coś się zmieni, odwołasz jednym kliknięciem, bez tłumaczenia się.</p>
      <a className="btn b-green" href={href('/pierwsza-wizyta/')}>Zobacz, jak wygląda wizyta</a>
    </div>
  );

  return (
    <div>
      {Stepper}
      {step === 1 && (
        <div className="card rv in" style={{ display: 'grid', gap: 28 }}>
          <div><h3 style={{ marginBottom: 16 }}>Z czym przychodzisz?</h3><Chips list={REASONS} value={reason} set={setReason} /></div>
          <div><h3 style={{ marginBottom: 16 }}>Komfort (opcjonalnie)</h3><Chips list={COMFORT} value={comfort} set={setComfort} /></div>
          <div><button className="btn b-green" onClick={() => setStep(2)}>Dalej: lekarz i termin →</button></div>
        </div>
      )}
      {step === 2 && (
        <div style={{ display: 'grid', gap: 24 }}>
          <div className="card" style={{ padding: 24 }}><span className="k">Powód</span> <b style={{ marginLeft: 8 }}>{reason}</b> <button className="link" style={{ marginLeft: 16 }} onClick={() => setStep(1)}>Zmień</button></div>
          <div><h3 style={{ marginBottom: 16 }}>Lekarz</h3><Chips list={DOCS} value={doc} set={setDoc} /></div>
          <div className="g2" style={{ alignItems: 'start', gap: 24 }}>
            <div className="cal">
              <h3 style={{ marginBottom: 18, textTransform: 'capitalize' }}>{month?.label}</h3>
              <div className="cal-grid">
                {['pn', 'wt', 'śr', 'cz', 'pt', 'sb', 'nd'].map(d => <span className="dn" key={d}>{d}</span>)}
                {month?.cells.map((d, i) => d ? (
                  <button key={i} className={isFree(d) ? 'free' : ''} disabled={!isFree(d)} aria-pressed={!!day && day.getTime() === d.getTime()} aria-label={`${fmtDay(d)}${isFree(d) ? ', wolne terminy' : ', brak terminów'}`} onClick={() => { setDay(d); setHour(''); }}>{d.getDate()}</button>
                ) : <span key={i} />)}
              </div>
            </div>
            <div className="slots">
              <h3>{day ? fmtDay(day) : 'Wybierz dzień'}</h3>
              <p style={{ color: 'var(--grey)', fontSize: 15 }}>{doc} · 60 min</p>
              {day && <div className="slots-grid">{HOURS.map(h => <button key={h} disabled={takenHour(h)} style={takenHour(h) ? { opacity: .35, cursor: 'default' } : undefined} aria-pressed={hour === h} onClick={() => setHour(h)}>{takenHour(h) ? `${h} · zajęte` : h}</button>)}</div>}
              {hour && <p style={{ fontSize: 15, marginBottom: 18 }}>Wybrano {hour}. Termin trzymamy dla Ciebie 10 minut.</p>}
              <button className="btn b-green" disabled={!hour} style={!hour ? { opacity: .4 } : undefined} onClick={() => setStep(3)}>Dalej: Twoje dane →</button>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="g2" style={{ alignItems: 'start', gap: 24 }}>
          <form className="form card" onSubmit={e => { e.preventDefault(); setStep(4); }}>
            <h3>Ostatni krok. Tylko to, czego potrzebujemy.</h3>
            <div className="field"><label htmlFor="b-n">Imię i nazwisko</label><input id="b-n" required autoComplete="name" value={name} onChange={e => setName(e.target.value)} /></div>
            <div className="field"><label htmlFor="b-t">Telefon</label><input id="b-t" type="tel" required autoComplete="tel" /></div>
            <div className="field"><label htmlFor="b-e">E-mail (opcjonalnie)</label><input id="b-e" type="email" autoComplete="email" /></div>
            <div className="field"><label htmlFor="b-f">Czego się obawiasz? (opcjonalnie)</label><textarea id="b-f" rows={3} placeholder="np. zastrzyku, dźwięku wiertła, że ktoś oceni stan zębów" /></div>
            <div className="row"><button type="button" className="btn b-line" onClick={() => setStep(2)}>← Wstecz</button><button className="btn b-green" type="submit">Potwierdź wizytę</button></div>
          </form>
          <dl className="summary">
            <h3>Twoja wizyta</h3>
            <div><dt>Powód</dt><dd>{reason}</dd></div>
            <div><dt>Komfort</dt><dd>{comfort}</dd></div>
            <div><dt>Lekarz</dt><dd>{doc}</dd></div>
            <div><dt>Termin</dt><dd>{day && fmtDay(day)}, {hour}</dd></div>
            <p style={{ color: 'var(--grey)', fontSize: 14 }}>Przypomnimy SMS-em dzień wcześniej. Odwołasz jednym kliknięciem, bez tłumaczenia się.</p>
          </dl>
        </div>
      )}
    </div>
  );
}
