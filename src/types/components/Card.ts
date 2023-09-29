export interface ICardHeader {
  title?: string;
  img?: string;
  imgClass?: string;
}

export interface ICardBody {
  children: JSX.Element | JSX.Element[];
  customClass?: string;
}

export interface ICard {
  children: JSX.Element | JSX.Element[];
  customClass?: string;
}
