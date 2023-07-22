import { hotel } from "assets";

interface IHostel {
  name: string;
  places: number;
  icon?: string;
  description: string
}
export const rooms: IHostel[] = [
  { 
    name: "Зеленый лес", 
    places: 8,
    icon: hotel,
    description: "Описание 1"
  },
  { 
    name: "Синий океан", 
    places: 12,
    icon: hotel,
    description: "Описание 2"
  },
  { 
    name: "Желтый дом", 
    places: 6,
    icon: hotel,
    description: "Описание 3"
  },
  { 
    name: "Красный камень", 
    places: 10,
    icon: hotel,
    description: "Описание 4"
  },
  { 
    name: "Розовый цветок", 
    places: 4,
    icon: hotel,
    description: "Описание 5"
  },
  { 
    name: "Оранжевый сок", 
    places: 8,
    icon: hotel,
    description: "Описание 6"
  },
  { 
    name: "Фиолетовый дракон", 
    places: 14,
    icon: hotel,
    description: "Описание 7"
  },
  { 
    name: "Белый снег", 
    places: 6,
    icon: hotel,
    description: "Описание 8"
  },
  { 
    name: "Черный кот", 
    places: 12,
    icon: hotel,
    description: "Описание 9"
  },
  { 
    name: "Коричневый медведь", 
    places: 8,
    icon: hotel,
    description: "Описание 10"
  }
]