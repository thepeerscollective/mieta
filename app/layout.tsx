import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/fraunces/full-italic.css';
import '@fontsource-variable/dm-sans/index.css';
import './globals.css';
import { Footer, Header, Reveal } from '@/components/chrome';
import { BASE } from '@/lib/base';

export const metadata: Metadata = {
  metadataBase: new URL('https://thepeerscollective.com'),
  title: { default: 'Mięta · dentysta, do którego nie trzeba się zbierać', template: '%s · Mięta' },
  description: 'Spokojny gabinet stomatologiczny na Podgórzu w Krakowie. Ceny znane przed leczeniem, pierwsza wizyta za 0 zł i lekarze, którzy najpierw rozmawiają.',
  icons: { icon: `${BASE}/favicon.svg` },
  openGraph: { title: 'Mięta · stomatologia, Kraków Podgórze', description: 'Dentysta, do którego nie trzeba się zbierać.', images: [`${BASE}/img/m01.webp`] },
};
export const viewport: Viewport = { themeColor: '#FAF7F2', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <a className="skip" href="#main">Przejdź do treści</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
