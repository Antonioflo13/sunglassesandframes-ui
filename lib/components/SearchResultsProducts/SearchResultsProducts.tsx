
import { Grid } from '@blocks/Grid';
import { Typography } from '@components/Typography';

import styles from './SearchResultsProducts.module.css';

import { SearchResultsProductsProps } from '.';

export const SearchResultsProducts = ({ products, mobileView }: SearchResultsProductsProps): JSX.Element => {
  return (
    <section>
      <Typography
        className={styles['title']}
        label={`PRODUCTS (${products.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`${styles['results']} ${!mobileView && styles['not-visible']}`}>
        <Grid type="products" items={products} />
      </div>
    </section>
  );
};
