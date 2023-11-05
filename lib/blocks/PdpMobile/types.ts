import { ProductModel } from '../../models/product-model';

export type PdpMobileProps = {
  /**
   * Additional React elements or content to display inside the image wrapper
   */
  children: React.ReactNode;

  products: ProductModel[];

  initialSlide: number;

  callback: (index: number) => void;
};
