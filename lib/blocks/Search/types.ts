type Designer = {
    id: string;
    name: string;
    link: string;
}

type Product = {
    id: string;
    productName: string;
    designer: string;
    price: string;
    image: {
        alt: string;
        src: string;
    };
}

export type SearchProps = {
    designers: Designer[];
    products: Product[];
}