export const BASE = process.env.NEXT_PUBLIC_BASE ?? '';
export const img = (n: string) => `${BASE}/img/${n}.webp`;
export const href = (p: string) => `${BASE}${p}`;

export const ADDRESS = 'ul. Limanowskiego 12, Kraków';
export const HOURS = 'pon–pt 8–20 · sob 9–14';
export const PHONE = '+48 12 000 00 00';
export const MAIL = 'recepcja@mieta.pl';
