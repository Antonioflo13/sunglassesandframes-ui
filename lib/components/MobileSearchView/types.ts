import { MobileSearchView } from '@blocks/Search';

export type MobileSearchViewProps = {
    filterLabels: MobileSearchView[];
    onClick: (clickedLabel: string) => void;
  }