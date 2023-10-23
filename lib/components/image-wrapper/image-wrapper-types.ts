export type ImageWrapperProps = {
  children: React.ReactNode;
  typeImage: TypeImage;
};

export type TypeImage =
  | 'swiper-primary'
  | 'swiper-secondary'
  | 'image-primary'
  | 'image-secondary'
  | 'plp'
  | 'pdp';
