export interface INavLink {
  id: string;
  title: string;
}

export const navLinks: INavLink[] = [
  {
    id: "adminpanel",
    title: "Админ панель"
  },
  {
    id: "hostels",
    title: "Хостелы"
  },
  {
    id: "statistics",
    title: "Статистика"
  }
]