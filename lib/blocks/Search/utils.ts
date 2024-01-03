import { ProductModel } from '@components/Product/types';

export const getViewButton = (productsLength: number, viewableProducts: number): boolean => {
  if (productsLength > viewableProducts) {
    return true;
  }
  return false;
};

export const getViewItems = ({
  viewableProducts,
  products,
}: {
  viewableProducts: number;
  products?: ProductModel[];
}): ProductModel[] => {
  return products ? [...products].slice(0, viewableProducts) : [];
};
