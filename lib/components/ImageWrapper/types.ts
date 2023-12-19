export type ImageWrapperProps = {
  /**
   * Additional React elements or content to display inside the image wrapper
   */
  children: React.ReactNode;
  /**
   * The label text to display
   */
  typeImage?: TypeImage;
};

export type TypeImage =
  | 'swiper-primary'
  | 'swiper-secondary'
  | 'image-primary'
  | 'image-secondary'
  | 'article'
  | 'plp'
  | 'pdp';
