export interface Item {
  name: string;
  subItems?: string[];
}

export interface Document {
  title: string;
  img: string;
  items: Item[];
}
