import { ProductModel } from '@components/Product/types';

export type Designer = {
    id: string;
    name: string;
    link: string;
}

export type MobileSearchView = {
    label: string;
    selected: boolean;
}

export type SearchIcons = {
    search: string;
    close: string;
    notFound: string;
}

export type CallBacks = {
    onSearch: () => void;
    onCloseSearch: () => void;
}

export type SearchProps = {
    designers: Designer[];
    products: ProductModel[];
    mobileSearchView: MobileSearchView[];
    searchIcons: SearchIcons;
    viewableProducts: number;
    labelNotFound: string;
    callBacks: CallBacks;
}