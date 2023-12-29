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

export type Icons = {
    search: string;
    close: string;
}

export type Images = {
    notFound: string;
}

export type Assets = {
    icons: Icons;
    images: Images;
}

export type CallBacks = {
    onSearch: () => void;
    onCloseSearch: () => void;
}

export type SearchProps = {
    designers: Designer[];
    products: ProductModel[];
    mobileSearchView: MobileSearchView[];
    assets: Assets;
    viewableProducts: number;
    labelNotFound: string;
    callBacks: CallBacks;
}