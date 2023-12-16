
export type PdpMobileProps = {
  products: {
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
    };}[];

  initialSlide: number;

  callback: (index: number) => void;

  pdpBottomCardCallback?: () => void;
};
