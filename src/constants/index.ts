import { hotel } from "assets";

interface IHostel {
  name: string;
  places: number;
  busy: number,
  icon?: string;
  description: string,
  deleted: boolean;
  reserved: boolean;
}
export const rooms: IHostel[] = [
  {
    name: "Зеленый лес",
    places: 8,
    busy: 6,
    icon: hotel,
    description: "Отель расположен в центре города и предлагает номера с кондиционером и бесплатным Wi-Fi. В отеле есть ресторан, бар и терраса.",
    deleted: false,
    reserved: true
  },
  {
    name: "Синий океан",
    places: 12,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в самом сердце Берлина, в нескольких минутах ходьбы от знаменитого Бранденбургского ворота. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Желтый дом",
    places: 6,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в парке размером 7 гектаров в центре города Баден-Баден. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Красный камень",
    places: 10,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в центре Мюнхена, всего в 5 минутах ходьбы от площади Мариенплац. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Розовый цветок",
    places: 4,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в центре Мюнхена, всего в 5 минутах ходьбы от площади Карлсплац. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Оранжевый сок",
    places: 8,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в самом сердце Берлина, всего в нескольких минутах ходьбы от знаменитого улицы Курфюрстендамм. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Фиолетовый дракон",
    places: 14,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в центре Мюнхена, всего в нескольких минутах ходьбы от площади Карлсплац. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Белый снег",
    places: 6,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в самом сердце Берлина, всего в нескольких минутах ходьбы от знаменитого улицы Фридрихштрассе. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Черный кот",
    places: 12,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в центре Мюнхена, всего в нескольких минутах ходьбы от площади Карлсплац. В отеле есть рестораны, бары и спа-центр.",
    deleted: false,
    reserved: false
  },
  {
    name: "Коричневый медведь",
    places: 8,
    busy: 6,
    icon: hotel,
    description: "Этот роскошный отель находится в самом сердце Берлина, всего в нескольких минутах ходьбы от знаменитого Б",
    deleted: false,
    reserved: false
  }
];

export const reserveItem = (index: number) => {
  rooms[index].reserved = true;
};

export const unreserveItem = (index: number) => {
  rooms[index].reserved = false;
};