
import { Grid } from '@blocks/Grid';
import { SearchInput } from '@components/SearchInput';
import { Typography } from '@components/Typography';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products }: SearchProps): JSX.Element => {

  return (
    <section className={styles['container']}>
      <SearchInput />
      <Typography className={styles['title-desktop']} label={`DESIGNER (${designers.length})`} fontFamily="helvetica-regular" textSize="lg" />
      <div className={`${styles['container-results']} ${styles[`${designers.length === 1 ? 'single-item' : 'more-items'}`]}`}>
        {designers.map(designer => (
          <Typography key={designer.id} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>
      <Typography className={styles['title-desktop']} label={`PRODUCTS (${products.length})`} fontFamily="helvetica-regular" textSize="lg" />
      <div className={styles['container-results']}>
        <Grid type="products" items={products} />
      </div>
    </section>
  );
};
