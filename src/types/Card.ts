export interface IItem {
  name: string;
  subItems?: string[];
}

export interface ICard {
  title: string;
  img?: string;
  items?: IItem[];
}
