import { ReactNode } from 'react';

export interface ImageModel {
  id: string | number;
  image: JSX.Element;
  wrapper?: (children: ReactNode) => JSX.Element;
}

export interface PdpRelatedColorsProps {
  images: ImageModel[];
}
