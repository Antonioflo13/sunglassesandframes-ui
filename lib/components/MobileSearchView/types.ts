import { MobileSearchView } from '@blocks/Search';
import { Dispatch, SetStateAction } from 'react';

export type MobileSearchViewProps = {
    filterLabels: MobileSearchView[];
    setFilterLabels: Dispatch<SetStateAction<MobileSearchView[]>>;
  }