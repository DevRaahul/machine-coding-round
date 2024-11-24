import { IBoxData, ICountry } from "./interface";

export const boxMockData: IBoxData[] = [
  { id: 1, isClicked: false, order: -1, isVisible: true },
  { id: 2, isClicked: false, order: -1, isVisible: true },
  { id: 3, isClicked: false, order: -1, isVisible: true },
  { id: 4, isClicked: false, order: -1, isVisible: true },
  { id: 5, isClicked: false, order: -1, isVisible: true },
  { id: 6, isClicked: false, order: -1, isVisible: true },
  { id: 7, isClicked: false, order: -1, isVisible: true },
  { id: 8, isClicked: false, order: -1, isVisible: true },
  { id: 9, isClicked: false, order: -1, isVisible: true },
];

export const countries: ICountry[] = [
  {
    id: 79,
    name: "India",
    population: 1380004385,
    land_area: 3287263,
    density: 419.9,
    capital: "New Delhi",
    currency: "Indian rupee",
  },
  {
    id: 177,
    name: "Thailand",
    population: 69830779,
    land_area: 513120,
    density: 136.1,
    capital: "Bangkok",
    currency: "Thai baht",
  },
  {
    id: 168,
    name: "Sri Lanka",
    population: 22409381,
    land_area: 62710,
    density: 357.4,
    capital: "Colombo, Sri Jayawardenepura Kotte",
    currency: "Sri Lankan rupee",
  },
  {
    id: 134,
    name: "Pakistan",
    population: 216565318,
    land_area: 881913,
    density: 245.7,
    capital: "Islamabad",
    currency: "Pakistani rupee",
  },
  {
    id: 85,
    name: "Italy",
    population: 60461826,
    land_area: 302073,
    density: 200.3,
    capital: "Rome",
    currency: "Euro",
  },
];
