export interface IQuestion {
  id: number;
  name: string;
  path: string;
  description: string;
  techStack: string[];
  codeUrl: string;
}

export interface IThemeIcon {
  mode: string;
  themeChange: any;
}
export interface ILogoutIcon {
  logoutHandler: any;
}

export interface IBoxData {
  id: number;
  isClicked: boolean;
  order: number;
  isVisible: boolean;
}

export interface IToastNotification {}

export interface ICountry {
  id: number;
  name: string;
  population: number;
  land_area: number;
  density: number;
  capital: string;
  currency: string;
}

export interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}
