import { ProductModel } from '@components/Product/types';

export const getViewButton = (productsLength: number, viewableProducts: number): boolean => {
  if (productsLength > viewableProducts) {
    return true;
  }
  return false;
};

export const getViewItems = (products: ProductModel[], viewableProducts: number): ProductModel[] => {
  return products.slice(0, viewableProducts);
};