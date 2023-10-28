export type ProductsPlpProps = {
    title?: string;
    products: Products[];
};

export type Products = {
    id: string;
    image: Image;
    productName: string;
    designer: string;
    price: string;
}
type Image = {
    src: string;
    alt: string;
}