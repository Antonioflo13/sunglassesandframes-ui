import { ProductModel } from '@components/Product/types';

export const getViewButton = (products: ProductModel[], mobileView: boolean): boolean => {
  if (mobileView) {
    return products.length > 4;
  }
  return products.length > 6;
};

export const getViewItems = (products: ProductModel[], mobileView: boolean): ProductModel[] => {
  if (mobileView) {
    return products.slice(0, 4);
  }
  return products.slice(0, 6);
};