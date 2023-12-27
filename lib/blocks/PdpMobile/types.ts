export interface SFProduct {
  id: string;
  name: string;
  description: string;
  vendor: string;
  totalInventory: number;
  images: {
    id: string | number;
    image: JSX.Element;
  }[];
  price: {
    amount: number | string;
    currencyCode: string;
  };
}

export type PdpMobileProps = {
  products: SFProduct[];

  initialSlide: number;

  callback: (index: number) => void;

  pdpBottomCardButtonLabel: string;

  pdpBottomCardCallback?: () => void;
};
