import { ProductModel } from '@components/Product/types';
import { ReactNode } from 'react';

export type Designer = {
  id: string | number;
  title: string;
  wrapper?: (children: ReactNode) => JSX.Element;
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
  onSearch: (input: string) => void;
  onCloseSearch: () => void;
  onClickViewAll: () => void;
};

export type SearchProps = {
  mobileViews: MobileViews[];
  assets: Assets;
  viewableProducts: number;
  labels: Labels;
  callBacks: CallBacks;
  className?: string;
  designers?: {
    items: Designer[];
    resultNumber: number;
  };
  products?: {
    items: ProductModel[];
    resultNumber: number;
  };
};
