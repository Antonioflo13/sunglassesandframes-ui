import { MobileSearchView } from '@components/MobileSearchView';
import { SearchInput } from '@components/SearchInput';
import { SearchResultsDesigners } from '@components/SearchResultsDesigners';
import { SearchResultsNotFound } from '@components/SearchResultsNotFound';
import { SearchResultsProducts } from '@components/SearchResultsProducts';
import { useState } from 'react';

import styles from './Search.module.css';
import { getViewButton, getViewItems } from './utils';

import { SearchProps } from '.';

const Search = ({
  designers,
  products,
  mobileSearchView,
  assets,
  viewableProducts,
  labels,
  callBacks,
}: SearchProps): JSX.Element => {
  const [filterLabels, setFilterLabels] = useState(mobileSearchView);

  const onClickChangeView = (clickedLabel: string): void => {
    const updatedSelections = filterLabels.map(item => ({
      ...item,
      selected: item.label === clickedLabel,
    }));
    setFilterLabels(updatedSelections);
  };

  const isMobileView = filterLabels.find(selection => selection.selected)?.label;

  return (
    <section className={styles.container}>
      <MobileSearchView filterLabels={filterLabels} onClick={onClickChangeView} />
      <SearchInput
        searchIcons={assets.icons}
        onSearch={callBacks.onSearch}
        onCloseSearch={callBacks.onCloseSearch}
      />
      {products.length === 0 && designers.length === 0 && (
        <SearchResultsNotFound image={assets.images.notFound} label={labels.notFound} />
      )}
      <SearchResultsDesigners
        designers={designers}
        isMobileView={isMobileView === 'DESIGNERS'}
        label={labels.designer}
      />
      <SearchResultsProducts
        products={getViewItems(products, viewableProducts)}
        isMobileView={isMobileView === 'PRODUCTS'}
        label={labels.product}
        viewButton={getViewButton(products.length, viewableProducts)}
      />
    </section>
  );
};

export default Search;
