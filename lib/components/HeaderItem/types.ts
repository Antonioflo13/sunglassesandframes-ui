import { ReactNode } from 'react';

type HeaderItemTypes = 'img' | 'icon' | 'label' | 'logo';

export type HeaderItemModel = {
  type: HeaderItemTypes;
  label?: string;
  wrapper?: (children: ReactNode) => JSX.Element;
  image?: {
    element: JSX.Element;
    width?: `${number}px`;
  };
  callback?: () => void;
};
