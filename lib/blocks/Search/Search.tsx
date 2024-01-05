import { useCallback, useEffect, useMemo, useState } from 'react';

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
  className,
}: SearchProps): JSX.Element => {
  const [viewLabels, setViewLabels] = useState(mobileViews);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [announcementBarHeight, setAnnouncementBarHeight] = useState<number>(0);
  const [viewLabelsHeight, setViewLabelsHeight] = useState<number>(0);
  const [searchInputHeight, setSearchInputHeight] = useState<number>(0);
  const [scrollableAreaHeight, setScrollableAreaHeight] = useState<number>(0);

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

  useEffect(() => {
    setHeaderHeight(document.querySelector('nav')?.clientHeight ?? 0);
    setAnnouncementBarHeight(document.getElementById('announcement-bar')?.clientHeight ?? 0);
    setViewLabelsHeight(document.getElementById('view-label-container')?.clientHeight ?? 0);
    setSearchInputHeight(document.getElementById('search-input-container')?.clientHeight ?? 0);

    setScrollableAreaHeight(
      viewLabelsHeight + searchInputHeight + headerHeight + announcementBarHeight,
    );
  }, [announcementBarHeight, headerHeight, searchInputHeight, viewLabelsHeight]);

  return (
    <section className={`${styles['container-search']} ${className ? className : ''}`}>
      <div className={styles['container-content']}>
        <MobileSearchViewLabels viewLabels={viewLabels} onClick={changeView} />
        <SearchInput
          searchIcons={assets.icons}
          onSearch={callBacks.onSearch}
          onCloseSearch={callBacks.onCloseSearch}
        />
        {products && products.items.length === 0 && designers && designers.items.length === 0 && (
          <SearchResultsNotFound image={assets.images.notFound} label={labels.notFound} />
        )}
        <div
          className={styles['container-results']}
          style={{
            height: `calc(100dvh - 10px - ${scrollableAreaHeight}px)`,
          }}
        >
          <SearchResultsDesigners
            className={`
            ${view !== 'DESIGNERS' || !designers ? styles['hidden'] : ''}
            ${designers ? styles['visible'] : ''}
            `}
            designers={designers}
            label={labels.designer}
          />
          <SearchResultsProducts
            className={`
            ${view !== 'PRODUCTS' || !products ? styles['hidden'] : ''}
            ${products ? styles['visible'] : ''}
            `}
            products={
              products && {
                items: getViewItems({
                  products: products?.items,
                  viewableProducts,
                }),
                resultNumber: products?.resultNumber,
              }
            }
            label={labels.product}
            viewButton={getViewButton(products?.resultNumber ?? 0, viewableProducts)}
            onClickViewAll={callBacks.onClickViewAll}
          />
        </div>
      </div>
    </section>
  );
};
