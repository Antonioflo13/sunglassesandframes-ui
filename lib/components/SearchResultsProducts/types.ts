import { Labels } from '@blocks/Search';
import { ProductModel } from '@components/Product/types';

export type SearchResultsProductsProps = {
    products: ProductModel[];
    viewableProducts: number;
    isMobileView: boolean;
    label: Labels['product'];
}