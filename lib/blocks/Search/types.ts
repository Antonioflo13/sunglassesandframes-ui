import { ProductModel } from '@components/Product/types';

export type Designer = {
  id: string;
  name: string;
  link: string;
};

export type MobileViews = {
  label: string;
  selected: boolean;
};

export type Icons = {
  search: JSX.Element;
  close: JSX.Element;
};

export type Images = {
  notFound: JSX.Element;
};

export type Labels = {
  designer: string;
  product: string;
  notFound: string;
};

export type Assets = {
  icons: Icons;
  images: Images;
};

export type CallBacks = {
  onSearch: () => void;
  onCloseSearch: () => void;
};

export type SearchProps = {
  designers: Designer[];
  products: ProductModel[];
  mobileViews: MobileViews[];
  assets: Assets;
  viewableProducts: number;
  labels: Labels;
  callBacks: CallBacks;
};
