
import { MobileSearchFilterLabels } from '@components/MobileSearchFilterLabels';
import { SearchInput } from '@components/SearchInput';
import { SearchResultsDesigners } from '@components/SearchResultsDesigners';
import { SearchResultsProducts } from '@components/SearchResultsProducts';
import { useState } from 'react';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products, mobileFilterLabels, searchIcons }: SearchProps): JSX.Element => {
  const [filterLabels, setFilterLabels] = useState(mobileFilterLabels);
  const designersMobileView = filterLabels.find(selection => selection.selected)?.label === 'DESIGNERS';
  const productsMobileView = filterLabels.find(selection => selection.selected)?.label === 'PRODUCTS';

  return (
    <section className={styles['container']}>
      <MobileSearchFilterLabels filterLabels={filterLabels} setFilterLabels={setFilterLabels} />
      <SearchInput searchIcons={searchIcons} />
      <SearchResultsDesigners designers={designers} mobileView={designersMobileView} />
      <SearchResultsProducts products={products} mobileView={productsMobileView} />
    </section>
  );
};
