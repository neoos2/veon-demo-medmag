// MEDMAG facts for the homepage. Source: veon/client.json, audit/screens/home.html (menu), audit/screens/home.txt (prices 05.10.2026).
// Nothing here is invented: if a fact is missing, the page does not show it.

export const FUTURE = "Розділ у розробці";

export interface Phone { href: string; label: string; short: string }

export const phones: Phone[] = [
  { href: "tel:+380985943141", label: "+38 098 594-31-41", short: "098 594-31-41" },
  { href: "tel:+380443389673", label: "+38 044 338-96-73", short: "044 338-96-73" },
  { href: "tel:+380505943141", label: "+38 050 594-31-41", short: "050 594-31-41" },
  { href: "tel:+380935943141", label: "+38 093 594-31-41", short: "093 594-31-41" },
];
export const mainPhone = phones[0];
export const clinicPhone = phones[1];

export const contacts = {
  email: "info@medmag.ua",
  viber: "viber://chat?number=%2B380985943141",
  telegram: "https://t.me/medmag_online",
  instagram: "https://www.instagram.com/medmag.ua/",
  facebook: "https://www.facebook.com/medmag.ua",
  street: "вул. Левка Лук’яненка, 19",
  city: "Київ, 04207",
  metro: "метро Мінська, вихід 7",
  map: "https://www.google.com/maps/search/?api=1&query=%D0%9A%D0%B8%D1%97%D0%B2%2C%20%D0%B2%D1%83%D0%BB.%20%D0%9B%D0%B5%D0%B2%D0%BA%D0%B0%20%D0%9B%D1%83%D0%BA%27%D1%8F%D0%BD%D0%B5%D0%BD%D0%BA%D0%B0%2C%2019",
};

export const schedule = [
  { days: "ПН–ПТ", hours: "9:00–18:00" },
  { days: "СБ–НД", hours: "9:00–16:00" },
];
export const scheduleShort = "ПН–ПТ 9–18, СБ–НД 9–16";

export interface PlusItem { name: string; img?: string }
// Popular categories (home.txt side menu, products_services); img — client tiles from content/img-src.
export const plusRow: PlusItem[] = [
  { name: "Тонометри", img: "img/tonometr.webp" },
  { name: "Інгалятори", img: "img/ingalator.webp" },
  { name: "Глюкометри", img: "img/glucometr.webp" },
  { name: "Пульсоксиметри" },
  { name: "Термометри" },
  { name: "Медичні лампи", img: "img/lampi.webp" },
  { name: "Очищувачі повітря", img: "img/ochyshchuvach.webp" },
  { name: "Іригатори", img: "img/irigator.webp" },
  { name: "Масажери" },
  { name: "Дарсонваль" },
  { name: "Бандажі й корсети", img: "img/bandazhi.webp" },
  { name: "Ортопедія для ніг", img: "img/ustilky.webp" },
  { name: "Милиці й тростини" },
  { name: "Ходунки", img: "img/khodunky.webp" },
];

export interface Department { name: string; total: number; items: string[]; img?: { src: string; alt: string } }
// Main menu of the current site: first-level subsections per department (counts from home.html).
export const departments: Department[] = [
  {
    name: "Домашня медтехніка", total: 11,
    img: { src: "img/tonometr.webp", alt: "Тонометр" },
    items: ["Тонометри", "Інгалятори (небулайзери)", "Глюкометри та тест-смужки", "Медичні лампи", "Очищувачі повітря", "Термометри", "Аплікатори Ляпко"],
  },
  {
    name: "Краса та здоров’я", total: 27,
    img: { src: "img/irigator.webp", alt: "Іригатор" },
    items: ["Іригатори", "Дарсонваль", "Масажери", "Алкотестери", "Ваги", "Компресійний трикотаж", "Мамам і дітям"],
  },
  {
    name: "Ортопедична продукція", total: 4,
    img: { src: "img/ustilky.webp", alt: "Ортопедичні устілки" },
    items: ["Ортопедія для ніг", "Бандажі, корсети, фіксатори", "Компресійний трикотаж", "Ортопедичні подушки"],
  },
  {
    name: "Засоби реабілітації", total: 11,
    img: { src: "img/khodunky.webp", alt: "Ходунки" },
    items: ["Милиці, тростини", "Ходунки, ролери", "Візки інвалідні", "Протипролежневі системи", "Реабілітаційні тренажери", "Підйомні засоби", "Гігієнічні вироби"],
  },
  {
    name: "Медичним закладам", total: 37,
    items: ["Електрокардіографи", "Монітори пацієнта", "Дефібрилятори", "Холтер", "УЗД станції", "Стерилізація", "Медичні меблі"],
  },
];

export const clinicEquipment = [
  "Електрокардіографи", "Монітори пацієнта", "Дефібрилятори", "Холтер", "УЗД станції", "Фетальні доплери",
  "Кисневе обладнання", "Апарати штучної вентиляції легенів", "Інфузійні прилади", "Ендоскопічне обладнання",
  "Світильники хірургічні", "Стерилізація", "Дезінфекція", "Фізіотерапія", "Лабораторія", "Медичні меблі",
];

export interface SaleItem { name: string; old: number; price: number }
export interface SaleGroup { id: string; tab: string; items: SaleItem[] }
// «Товари зі знижкою», audit/screens/home.txt (Wayback copy, 05.10.2026). Only medical goods.
export const saleGroups: SaleGroup[] = [
  {
    id: "tonometry", tab: "Тонометри",
    items: [
      { name: "Автоматичний тонометр Gamma Model A 5Gen", old: 1134, price: 790 },
      { name: "Автоматичний тонометр Promedica Classic", old: 1782, price: 1240 },
      { name: "Автоматичний тонометр Promedica Sense", old: 1384, price: 999 },
      { name: "Автоматичний тонометр VEGA BP810А", old: 2500, price: 1865 },
      { name: "Автоматичний тонометр із адаптером Gamma Plus 5Gen", old: 1686, price: 1150 },
    ],
  },
  {
    id: "beauty", tab: "Краса та здоров’я",
    items: [{ name: "Апарат Дарсонваль BactoSfera DARSONVAL White", old: 1899, price: 1590 }],
  },
  {
    id: "ortho", tab: "Ортопедія",
    items: [
      { name: "Бандаж вальгусний з ребром жорсткості Ortomedica MED 035 OPC", old: 660, price: 594 },
      { name: "Бандаж для фіксації ахіллового сухожилля Aurafix 409", old: 2365, price: 1990 },
    ],
  },
  {
    id: "clinics", tab: "Медзакладам",
    items: [{ name: "Апарат для штучної вентиляції легень із ручним приводом AMEDICA багаторазовий (дорослий)", old: 1280, price: 1050 }],
  },
];

export const uah = (n: number) => `${n.toLocaleString("uk-UA").replace(/\s/g, " ")} грн`;
export const discount = (i: SaleItem) => Math.round(((i.old - i.price) / i.old) * 100);

export const nav = [
  { href: "#catalog", label: "Каталог" },
  { href: "#sale", label: "Знижки" },
  { href: "#clinics", label: "Медзакладам" },
  { href: "#delivery", label: "Доставка і оплата" },
  { href: "#service", label: "Ремонт" },
  { href: "#contacts", label: "Контакти" },
];
