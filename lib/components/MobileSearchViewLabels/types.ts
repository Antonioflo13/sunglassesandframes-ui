import { MobileViews } from '@blocks/Search';

export type MobileSearchLabelsProps = {
  viewLabels: MobileViews[];
  onClick: (clickedLabel: string) => void;
};
