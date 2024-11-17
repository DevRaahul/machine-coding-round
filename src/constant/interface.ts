export interface IQuestion {
  id: number;
  name: string;
  path: string;
  description: string;
}

export interface IBoxData {
  id: number;
  isClicked: boolean;
  order: number;
  isVisible: boolean;
}
