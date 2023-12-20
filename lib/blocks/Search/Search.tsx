
import { Grid } from '@blocks/Grid';
import { MobileSearchFilterLabels } from '@components/MobileSearchFilterLabels';
import { SearchInput } from '@components/SearchInput';
import { Typography } from '@components/Typography';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products }: SearchProps): JSX.Element => {
  const mobileFilterLabels = [
    {
      label: 'DESIGNERS',
      selected: true,
    },
    {
      label: 'PRODUCTS',
      selected: false,
    }
  ];

  const mobileViewDesigners = mobileFilterLabels.find(selection => selection.selected)?.label === 'DESIGNERS';
  const mobileViewProducts = mobileFilterLabels.find(selection => selection.selected)?.label === 'PRODUCTS';

  return (
    <section className={styles['container']}>
      <MobileSearchFilterLabels filterLabels={mobileFilterLabels} />
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
