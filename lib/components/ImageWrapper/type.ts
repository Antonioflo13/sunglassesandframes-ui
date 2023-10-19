
export type ImageWrapperProps = {
    children: React.ReactNode;
    typeImage: TypeImage;
}

export enum TypeImage {
    swiper1 = 'swiper1',
    swiper2 = 'swiper2',
    image1 = 'image1',
    image2 = 'image2',
    plp = 'plp',
    pdp = 'pdp',

}