import { useCallback, useMemo, useState } from 'react';

import {
  MobileSearchViewLabels,
  SearchInput,
  SearchResultsDesigners,
  SearchResultsNotFound,
  SearchResultsProducts,
} from '../../components';

import styles from './Search.module.css';
import { SearchProps } from './types';
import { getViewButton, getViewItems } from './utils';

export const Search = ({
  designers,
  products,
  mobileViews,
  assets,
  viewableProducts,
  labels,
  callBacks,
}: SearchProps): JSX.Element => {
  const [viewLabels, setViewLabels] = useState(mobileViews);

  const changeView = useCallback(
    (selectedLabel: string): void => {
      const updatedSelections = viewLabels.map(item => ({
        ...item,
        selected: item.label === selectedLabel,
      }));
      setViewLabels(updatedSelections);
    },
    [viewLabels],
  );

  const view = useMemo(() => viewLabels.find(selection => selection.selected)?.label, [viewLabels]);

  return (
    <section className={styles['container-search']}>
      <MobileSearchViewLabels viewLabels={viewLabels} onClick={changeView} />
      <SearchInput
        searchIcons={assets.icons}
        onSearch={callBacks.onSearch}
        onCloseSearch={callBacks.onCloseSearch}
      />
      {products.length === 0 && designers.length === 0 && (
        <SearchResultsNotFound image={assets.images.notFound} label={labels.notFound} />
      )}
      <SearchResultsDesigners
        className={`${styles['visible']} ${view !== 'DESIGNERS' ? styles['hidden'] : ''}`}
        designers={designers}
        label={labels.designer}
      />
      <SearchResultsProducts
        className={`${styles['visible']} ${view !== 'PRODUCTS' ? styles['hidden'] : ''}`}
        products={getViewItems(products, viewableProducts)}
        label={labels.product}
        viewButton={getViewButton(products.length, viewableProducts)}
      />
    </section>
  );
};
