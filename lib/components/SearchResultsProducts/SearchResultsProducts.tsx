
import { Grid } from '@blocks/Grid';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import styles from './SearchResultsProducts.module.css';

import { getViewButton, getViewItems, SearchResultsProductsProps } from '.';

export const SearchResultsProducts = ({ products, mobileView }: SearchResultsProductsProps): JSX.Element => {
  const viewButton = getViewButton(products, mobileView);
  return (
    <section>
      <Typography
        className={styles['title']}
        label={`PRODUCTS (${products.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`${styles['results']} ${!mobileView && styles['not-visible']}`}>
        <Grid type="products" items={getViewItems(products, mobileView)} />
      </div>
      <Button
        className={`${viewButton ? styles['view-button'] : styles['not-view-button']}`}
        label='VIEW ALL'
        fontFamily='helvetica-regular'
      />
    </section>
  );
};
