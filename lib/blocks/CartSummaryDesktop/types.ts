import { ReactNode } from 'react';

export type CartSummaryDesktopProps = {
  icons: {
    icon: ReactNode;
    label: string;
  }[];
  totalPrice: { amount: number; currencyCode: string };
  buttonLabel: string;
  goToCheckout: () => void;
  className?: string;
};
