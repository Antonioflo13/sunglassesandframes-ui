import { Labels } from '@blocks/Search';
import { ProductModel } from '@components/Product/types';

export type SearchResultsProductsProps = {
    products: ProductModel[];
    isMobileView: boolean;
    label: Labels['product'];
    viewButton: boolean;
}