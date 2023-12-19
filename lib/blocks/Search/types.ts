import { ProductModel } from '@components/Product/types';

type Designer = {
    id: string;
    name: string;
    link: string;
}

export type SearchProps = {
    designers: Designer[];
    products: ProductModel[];
}