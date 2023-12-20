import { MobileFilterLabels } from '@blocks/Search';
import { Dispatch, SetStateAction } from 'react';

export type MobileSearchFilterLabelsProps = {
    filterLabels: MobileFilterLabels[];
    setFilterLabels: Dispatch<SetStateAction<MobileFilterLabels[]>>;
  }