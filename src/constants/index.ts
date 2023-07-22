import { hotel } from "assets";

interface IHostel {
  name: string;
  places: number;
  icon?: string
}
export const rooms: IHostel[] = [
  { 
    name: "Зеленый лес", 
    places: 8,
    icon: hotel
  },
  { 
    name: "Синий океан", 
    places: 12,
    icon: hotel
  },
  { 
    name: "Желтый дом", 
    places: 6,
    icon: hotel
  },
  { 
    name: "Красный камень", 
    places: 10,
    icon: hotel
  },
  { 
    name: "Розовый цветок", 
    places: 4,
    icon: hotel
  },
  { 
    name: "Оранжевый сок", 
    places: 8,
    icon: hotel
  },
  { 
    name: "Фиолетовый дракон", 
    places: 14,
    icon: hotel
  },
  { 
    name: "Белый снег", 
    places: 6,
    icon: hotel
  },
  { 
    name: "Черный кот", 
    places: 12,
    icon: hotel
  },
  { 
    name: "Коричневый медведь", 
    places: 8,
    icon: hotel
  }
]