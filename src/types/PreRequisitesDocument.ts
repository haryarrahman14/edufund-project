export interface IItem {
  name: string;
  subItems?: string[];
}

export interface IDocument {
  title: string;
  img: string;
  items: IItem[];
}
