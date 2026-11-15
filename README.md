# Mięta

Serwis gabinetu stomatologicznego na Podgórzu. Koncept: **dentysta, do którego nie trzeba się zbierać**. Łuki, mięta, spokój, a strach pacjenta jest punktem wyjścia, nie przeszkodą.

Live: https://thepeerscollective.com/mieta/

- Next.js 15, static export, GitHub Pages
- `components/Listen.tsx` "Posłuchaj, zanim przyjdziesz": dźwięki gabinetu syntetyzowane w Web Audio, z trybem słuchawek z redukcją szumów
- `components/Booking.tsx` rezerwacja w 3 krokach (powód, lekarz i termin, dane)
- `lib/data.ts` zespół, zabiegi, cennik

```
npm install
NEXT_PUBLIC_BASE= npm run dev
```

Projekt: The Peers Collective
