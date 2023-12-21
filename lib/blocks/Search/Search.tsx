import { MobileSearchView } from '@components/MobileSearchView';
import { SearchInput } from '@components/SearchInput';
import { SearchResultsDesigners } from '@components/SearchResultsDesigners';
import { SearchResultsProducts } from '@components/SearchResultsProducts';
import { useState } from 'react';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products, mobileSearchView, searchIcons, viewableProducts }: SearchProps): JSX.Element => {
  const [filterLabels, setFilterLabels] = useState(mobileSearchView);
  const isMobileView = {
    designers: filterLabels.find(selection => selection.selected)?.label === 'DESIGNERS',
    products: filterLabels.find(selection => selection.selected)?.label === 'PRODUCTS',
  };

  return (
    <section className={styles['container']}>
      <MobileSearchView filterLabels={filterLabels} setFilterLabels={setFilterLabels} />
      <SearchInput searchIcons={searchIcons} />
      <SearchResultsDesigners designers={designers} isMobileView={isMobileView.designers} />
      <SearchResultsProducts
        products={products}
        isMobileView={isMobileView.products}
        viewableProducts={viewableProducts}
      />
    </section>
  );
};
