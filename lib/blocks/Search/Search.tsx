import { MobileSearchView } from '@components/MobileSearchView';
import { SearchInput } from '@components/SearchInput';
import { SearchResultsDesigners } from '@components/SearchResultsDesigners';
import { SearchResultsNotFound } from '@components/SearchResultsNotFound';
import { SearchResultsProducts } from '@components/SearchResultsProducts';
import { useState } from 'react';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products, mobileSearchView, searchIcons, viewableProducts, labelNotFound, callBackSearch, callBackCloseSearch }: SearchProps): JSX.Element => {
  const [filterLabels, setFilterLabels] = useState(mobileSearchView);
  const isMobileView = {
    designers: filterLabels.find(selection => selection.selected)?.label === 'DESIGNERS',
    products: filterLabels.find(selection => selection.selected)?.label === 'PRODUCTS',
  };
  const searchNotFound = products.length === 0 && designers.length === 0;

  return (
    <section className={styles['container']}>
      <MobileSearchView filterLabels={filterLabels} setFilterLabels={setFilterLabels} />
      <SearchInput searchIcons={searchIcons} callBackSearch={callBackSearch} callBackCloseSearch={callBackCloseSearch} />
      {searchNotFound && <SearchResultsNotFound icon={searchIcons.notFound} labelNotFound={labelNotFound} />}
      <SearchResultsDesigners designers={designers} isMobileView={isMobileView.designers} />
      <SearchResultsProducts
        products={products}
        isMobileView={isMobileView.products}
        viewableProducts={viewableProducts}
      />
    </section>
  );
};
