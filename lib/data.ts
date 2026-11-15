export type Doc = { id: string; name: string; role: string; img: string; bio: string; after: string };

export const TEAM: Doc[] = [
  { id: 'mieta', name: 'lek. dent. Anna Mięta', role: 'założycielka · stomatologia zachowawcza', img: 'm02', bio: 'Pracuje z pacjentami po latach przerwy. Mówi, że najważniejsze narzędzie to krzesło do rozmowy.', after: 'po pracy: wspinaczka' },
  { id: 'kruk', name: 'lek. dent. Tomasz Kruk', role: 'endodoncja pod mikroskopem', img: 'm03', bio: 'Ponad 3 000 wyleczonych kanałów. Uczy endodoncji na kursach dla lekarzy.', after: 'po pracy: chleb na zakwasie' },
  { id: 'wrona', name: 'lek. dent. Ola Wrona', role: 'stomatologia dziecięca', img: 'm04', bio: 'Dzieci znają ją jako „panią od liczenia zębów”. Pracuje z psem terapeutą Fiodorem.', after: 'po pracy: Fiodor i rower' },
  { id: 'lis', name: 'lek. dent. Piotr Lis', role: 'protetyka i implanty', img: 'z01', bio: 'Projektuje uśmiechy cyfrowo, zanim cokolwiek dotknie.', after: 'po pracy: maratony' },
  { id: 'sowa', name: 'Kasia Sowa', role: 'higienistka', img: 'z02', bio: 'Higienizacja bez pośpiechu i bez kazań. Uczy szczotkowania na modelu.', after: 'po pracy: ceramika' },
  { id: 'czapla', name: 'Magda Czapla', role: 'opiekunka pacjenta · recepcja', img: 'z03', bio: 'Odbiera telefon, pamięta imię i oddzwania, kiedy obiecała.', after: 'po pracy: kryminały' },
];

export const TREATMENTS = [
  { n: '01', slug: 'profilaktyka', title: 'Profilaktyka i higienizacja', short: 'przegląd, skaling, piaskowanie', items: ['Przegląd z planem leczenia', 'Higienizacja: skaling, piaskowanie, fluoryzacja', 'Lakowanie u dzieci'], from: 'od 180 zł', img: 'l01' },
  { n: '02', slug: 'zachowawcze', title: 'Leczenie zachowawcze', short: 'wypełnienia, leczenie próchnicy', items: ['Wypełnienia kompozytowe', 'Leczenie próchnicy w znieczuleniu', 'Odbudowa zęba'], from: 'od 350 zł', img: 'l02' },
  { n: '03', slug: 'kanalowe', title: 'Endodoncja pod mikroskopem', short: 'leczenie kanałowe, re-endo', items: ['Leczenie kanałowe 1–4 kanały', 'Ponowne leczenie (re-endo)', 'Usuwanie złamanych narzędzi'], from: 'od 1 400 zł', img: 'l03' },
  { n: '04', slug: 'estetyka', title: 'Estetyka', short: 'wybielanie, bonding, licówki', items: ['Wybielanie nakładkowe i gabinetowe', 'Bonding', 'Licówki porcelanowe'], from: 'od 900 zł', img: 'l04' },
  { n: '05', slug: 'protetyka', title: 'Protetyka i implanty', short: 'korony, mosty, implanty', items: ['Korony pełnoceramiczne', 'Mosty', 'Implanty z koroną'], from: 'od 2 200 zł', img: 'l05' },
  { n: '06', slug: 'dzieci', title: 'Dzieci', short: 'pierwsza wizyta, lakowanie, adaptacja', items: ['Pierwsza wizyta „poznajemy fotel”', 'Leczenie zębów mlecznych', 'Gaz rozweselający dla dzieci'], from: 'od 0 zł', img: 'l06' },
];

export const PRICES: [string, [string, string, string][]][] = [
  ['Na start', [['Wizyta zapoznawcza i rozmowa', '0 zł', 'nie dotykamy zębów, tylko rozmawiamy'], ['Przegląd z planem leczenia', '180 zł', 'z RTG pantomograficznym'], ['Konsultacja specjalistyczna', '250 zł', 'endodonta, protetyk, chirurg']]],
  ['Higiena', [['Higienizacja', '380 zł', 'skaling, piaskowanie, polerowanie, fluoryzacja'], ['Higienizacja dla dzieci', '220 zł', 'do 12 lat'], ['Instruktaż szczotkowania', '0 zł', 'przy każdej higienizacji']]],
  ['Leczenie', [['Wypełnienie małe / średnie / duże', '350 / 450 / 550 zł', 'zależy od wielkości ubytku'], ['Leczenie kanałowe', '1 400–2 200 zł', 'zależy od liczby kanałów'], ['Usunięcie zęba', '400–900 zł', 'zwykłe lub chirurgiczne']]],
  ['Estetyka i protetyka', [['Wybielanie nakładkowe', '1 300 zł', 'z nakładkami do domu'], ['Korona pełnoceramiczna', '2 600 zł', 'z projektem cyfrowym'], ['Implant z koroną', '5 900 zł', 'cała procedura, bez dopłat']]],
  ['Komfort', [['Gaz rozweselający', '150 zł', 'za wizytę'], ['Sedacja dożylna', '900 zł', 'z anestezjologiem'], ['Raty 0%', '0 zł', 'od 1 500 zł, do 24 rat']]],
];
