
import { Grid } from '@blocks/Grid';
import { SearchInput } from '@components/SearchInput';
import { Typography } from '@components/Typography';
import { useState } from 'react';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products }: SearchProps): JSX.Element => {
  const [selectionsLabel, setSelectionsLabel] = useState([
    {
      label: 'DESIGNERS',
      selected: true,
    },
    {
      label: 'PRODUCTS',
      selected: false,
    },
  ]);

  const mobileViewDesigners = selectionsLabel.find(selection => selection.selected)?.label === 'DESIGNERS';
  const mobileViewProducts = selectionsLabel.find(selection => selection.selected)?.label === 'PRODUCTS';

  const onClickLabel = (clickedLabel: string): void => {
    const updatedSelections = selectionsLabel.map(selection => {
      return {
        ...selection,
        selected: selection.label === clickedLabel,
      };
    });

    return setSelectionsLabel(updatedSelections);
  };

  return (
    <section className={styles['container']}>
      <div className={styles['mobile-filter-search']}>
        {selectionsLabel.map((selection, key) => (
          <button key={key} onClick={(): void => onClickLabel(selection.label)}>
            <Typography
              className={styles[`${selection.selected && 'label-selected'}`]}
              label={selection.label}
              fontFamily="helvetica-light"
              textSize="lg"
            />
          </button>
        ))}
      </div>
      <SearchInput />
      <Typography
        className={styles['title-desktop']}
        label={`DESIGNER (${designers.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`${styles['search-designers']} ${!mobileViewDesigners && styles['not-visible']}`}>
        {designers.map((designer, key) => (
          <Typography key={key} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>

      <Typography
        className={styles['title-desktop']}
        label={`PRODUCTS (${products.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`${styles['search-products']} ${!mobileViewProducts && styles['not-visible']}`}>
        <Grid type="products" items={products} />
      </div>

    </section>
  );
};
