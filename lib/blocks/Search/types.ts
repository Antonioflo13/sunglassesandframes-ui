import { Products } from '@blocks/ProductsList/types';

type Designer = {
    id: string;
    name: string;
    link: string;
}

export type SearchProps = {
    designers: Designer[];
    products: Products[];
}