import { ReactNode } from 'react';

import { TypographyProps } from '../Typography';

export type DesignerSliderItemProps = {
  item: DesignerSliderItemModel;
};

export type DesignerSliderItemModel = {
  id: string;
  image: JSX.Element;
  title?: TypographyProps;
  wrapper?: (children: ReactNode) => JSX.Element;
  callback?: () => void;
  type: 'designer';
};
