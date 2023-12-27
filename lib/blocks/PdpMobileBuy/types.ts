export type PdpMobileBuyProps = {
  /**
   * Information about the product to be displayed in the card
   */
  product: {
    name: string;
    price: {
      amount: number | string;
      currencyCode: string;
    };
    discountPrice?: string | number;
    vendor: string;
    totalInventory: number;
  };
  buttonLabel: string;
  callback?: () => void;
};
