import { ReactNode } from 'react';

export type CartSummaryMobileProps = {
  icons: {
    icon: ReactNode;
    label: string;
  }[];
  totalPrice: { amount: number; currencyCode: string };
  className?: string;
};
