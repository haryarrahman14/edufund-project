export interface Item {
  name: string;
  subItems?: string[];
}

export interface Card {
  title: string;
  img?: string;
  items?: Item[];
}
