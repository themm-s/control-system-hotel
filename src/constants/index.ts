import { hotel } from "assets";

interface IHostel {
  name: string;
  places: number;
  busy: number,
  icon?: string;
  description: string,
  deleted: boolean
}
export const rooms: IHostel[] = [
  { 
    name: "Зеленый лес", 
    places: 8,
    busy: 6,
    icon: hotel,
    description: "Описание 1",
    deleted: false
  },
  { 
    name: "Синий океан", 
    places: 12,
    busy: 6,
    icon: hotel,
    description: "Описание 2",
    deleted: false
  },
  { 
    name: "Желтый дом", 
    places: 6,
    busy: 6,
    icon: hotel,
    description: "Описание 3",
    deleted: false
  },
  { 
    name: "Красный камень", 
    places: 10,
    busy: 6,
    icon: hotel,
    description: "Описание 4",
    deleted: false
  },
  { 
    name: "Розовый цветок", 
    places: 4,
    busy: 6,
    icon: hotel,
    description: "Описание 5",
    deleted: false
  },
  { 
    name: "Оранжевый сок", 
    places: 8,
    busy: 6,
    icon: hotel,
    description: "Описание 6",
    deleted: false
  },
  { 
    name: "Фиолетовый дракон", 
    places: 14,
    busy: 6,
    icon: hotel,
    description: "Описание 7",
    deleted: false
  },
  { 
    name: "Белый снег", 
    places: 6,
    busy: 6,
    icon: hotel,
    description: "Описание 8",
    deleted: false
  },
  { 
    name: "Черный кот", 
    places: 12,
    busy: 6,
    icon: hotel,
    description: "Описание 9",
    deleted: false
  },
  { 
    name: "Коричневый медведь", 
    places: 8,
    busy: 6,
    icon: hotel,
    description: "Описание 10",
    deleted: false
  }
]