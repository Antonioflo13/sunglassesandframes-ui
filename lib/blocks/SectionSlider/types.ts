import { ReactNode } from 'react';

export type SectionSliderProps = {
  /**
   * title
   */
  title: string;

  /**
   * items
   */
  items: SliderItem[];
};

export type SliderItem = {
  id: string | number;
  title: string;
  itemWrapper?: (children: ReactNode) => JSX.Element;
  image: JSX.Element;
};
