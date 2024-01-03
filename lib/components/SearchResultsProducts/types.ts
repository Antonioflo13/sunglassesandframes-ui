import { Labels } from '@blocks/Search';
import { ProductModel } from '@components/Product/types';

export type SearchResultsProductsProps = {
  label: Labels['product'];
  viewButton: boolean;
  onClickViewAll: () => void;
  products?: {
    items: ProductModel[];
    resultNumber: number;
  };
  className?: string;
};
