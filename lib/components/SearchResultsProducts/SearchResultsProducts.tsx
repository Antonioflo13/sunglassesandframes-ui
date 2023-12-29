
import { Grid } from '@blocks/Grid';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import styles from './SearchResultsProducts.module.css';

import { SearchResultsProductsProps } from '.';

export const SearchResultsProducts = ({ products, isMobileView, label, viewButton }: SearchResultsProductsProps): JSX.Element => {

  return (
    <section>
      <Typography
        className={`${styles['title']} ${products.length === 0 && styles['not-found']}`}
        label={`${label} (${products.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`${!isMobileView && styles['not-visible']}`}>
        <Grid
          className={styles['results']}
          type="products"
          items={products}
          singleResult={products.length === 1}
        />
        <Button
          className={`${viewButton ? styles['view-button'] : styles['not-view-button']}`}
          label='VIEW ALL'
          fontFamily='helvetica-regular'
        />
      </div>
    </section>
  );
};
