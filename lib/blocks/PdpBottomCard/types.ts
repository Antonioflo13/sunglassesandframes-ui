export type PdpBottomCardProps = {
  /**
   * Information about the product to be displayed in the card
   */
  product: {
    name: string;
    price: string;
    discountPrice?: string | number;
    designer: string;
    availableNumber: number;
  };
};
