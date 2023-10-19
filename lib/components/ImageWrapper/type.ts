
export type ImageWrapperProps = {
    children: React.ReactNode;
    typeImage: TypeImage;
}

export enum TypeImage {
    swiperPrimary = 'swiperPrimary',
    swiperSecondary = 'swiperSecondary',
    imagePrimary = 'imagePrimary',
    imageSecondary = 'imageSecondary',
    plp = 'plp',
    pdp = 'pdp',

}