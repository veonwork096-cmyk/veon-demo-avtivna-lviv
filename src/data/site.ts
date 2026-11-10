// Facts for the Lviv homepage. Source: veon/client.json (company.contacts, products_services, hours, socials)
// and the text of the client's Lviv page (process, workshop, trucks). Nothing here is invented.

export interface Phone { tel: string; label: string; }

export const lvivPhones: Phone[] = [
  { tel: "+380677008620", label: "(067) 700-86-20" },
  { tel: "+380508213761", label: "(050) 821-37-61" },
];
export const mainPhone = lvivPhones[0];

export const networkPhones: Phone[] = [
  { tel: "+380672178787", label: "(067) 217 87 87" },
  { tel: "+380662770648", label: "(066) 277 06 48" },
];

export const address = "Львів, вул. Зелена, 408";
export const addressShort = "вул. Зелена, 408";
export const secondAddress = "вул. Зелена, 149Ю";
export const hours = "Пн–Пт 9:00–19:00, Сб з 9:00";
export const networkHours = "Пн–Пт 8:00–19:00, Сб 9:00–14:00";
export const email = "post@avtivna.com.ua";
export const telegram = "https://t.me/AVTIVNA_STO_bot";
export const instagram = "https://www.instagram.com/avtivna/";
export const facebook = "https://www.facebook.com/Avtivna";
export const routeUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Львів, вулиця Зелена, 408");

export const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#process", label: "Як ми працюємо" },
  { href: "#guarantee", label: "Гарантія і оплата" },
  { href: "#trucks", label: "Вантажні" },
  { href: "#contacts", label: "Контакти" },
] as const;

export interface Part {
  id: string;
  title: string;
  img: { src: string; srcset?: string; sizes?: string; width: number; height: number; alt: string };
  /** Price slot (turbines only): stays empty until the client confirms one price. */
  price?: string;
  wide?: boolean;
}

export const parts: Part[] = [
  {
    id: "turbo", title: "Ремонт турбін", wide: true,
    img: { src: "img/turbine-480.webp", srcset: "img/turbine-480.webp 480w, img/turbine-617.webp 617w", sizes: "(min-width: 64rem) 260px, 112px", width: 617, height: 588, alt: "Турбіна Garrett" },
  },
  { id: "pnvt", title: "Ремонт ПНВТ", img: { src: "img/pnvt.webp", width: 214, height: 142, alt: "Паливний насос високого тиску" } },
  { id: "injectors", title: "Ремонт форсунок", img: { src: "img/injectors.webp", width: 196, height: 173, alt: "Три дизельні форсунки" } },
  {
    id: "rack", title: "Ремонт рульових рейок і ГПК",
    img: { src: "img/steering-rack-420.webp", srcset: "img/steering-rack-420.webp 420w, img/steering-rack-930.webp 929w", sizes: "(min-width: 64rem) 300px, 112px", width: 929, height: 569, alt: "Рульова рейка" },
  },
  { id: "engine", title: "Ремонт двигуна", img: { src: "img/engine.webp", width: 189, height: 162, alt: "Двигун у зборі" } },
  { id: "dpf", title: "Очистка фільтрів сажі (DPF)", img: { src: "img/dpf.webp", width: 262, height: 95, alt: "Сажовий фільтр DPF" } },
  { id: "ac", title: "Заправка і ремонт кондиціонерів", img: { src: "img/ac-station.webp", width: 139, height: 199, alt: "Станція заправки автокондиціонерів" } },
];

export const steps = [
  { n: 1, title: "Діагностика", text: "Робимо попередню діагностику кожному клієнту й виявляємо точну причину поломки." },
  { n: 2, title: "Демонтаж", text: "Агрегат знімаємо одразу на підіймачі й негайно починаємо ремонт." },
  { n: 3, title: "Ремонт", text: "Пошкодження будь-якої складності ремонтуємо конвеєрним методом, без посередників." },
  { n: 4, title: "Сервіс", text: "Своєчасно інформуємо вас про нюанси ремонту на всіх етапах." },
] as const;

export const promises = [
  { lead: "Повне відновлення прямо на місці.", text: "Компетентні спеціалісти, сучасне обладнання." },
  { lead: "Не робимо зайвого.", text: "Акуратні та порядні майстри, зберігаємо авто в чистоті." },
  { lead: "Ремонт день у день.", text: "Починаємо роботу одразу після звернення." },
  { lead: "Описуємо повну картину пошкоджень", text: "і даємо гарантію на ремонт." },
] as const;

export const truckBrands = ["Caterpillar", "Detroit", "Hitachi", "JCB", "MAN", "John Deere", "Volvo", "Iveco", "DAF"];

export const futureNote = "Розділ у розробці";
