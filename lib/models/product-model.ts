export interface ProductModel {
  id: string;
  name: string;
  description: string;
  descriptionHtml: string;
  vendor: string;
  availableForSale: boolean;
  totalInventory: number;
  options: {
    name: string;
    values: string[];
  }[];
  metafields: {
    value: string;
  }[];
  images: {
    id: string;
    src: string;
    altText: string;
  }[];
  price: {
    amount: number | string;
    currencyCode: string;
  };
  variantId?: string;
}
