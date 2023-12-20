import { ProductModel } from '@components/Product/types';

export type Designer = {
    id: string;
    name: string;
    link: string;
}

export type MobileFilterLabels = {
    label: string;
    selected: boolean;
}

export type SearchProps = {
    designers: Designer[];
    products: ProductModel[];
    mobileFilterLabels: MobileFilterLabels[];
}