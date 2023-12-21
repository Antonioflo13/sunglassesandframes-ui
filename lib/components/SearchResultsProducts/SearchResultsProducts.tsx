
import { Grid } from '@blocks/Grid';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import styles from './SearchResultsProducts.module.css';

import { getViewButton, getViewItems, SearchResultsProductsProps } from '.';

export const SearchResultsProducts = ({ products, isMobileView, viewableProducts }: SearchResultsProductsProps): JSX.Element => {
  const viewButton = getViewButton(products.length, viewableProducts);
  return (
    <section>
      <Typography
        className={styles['title']}
        label={`PRODUCTS (${products.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`${!isMobileView && styles['not-visible']}`}>
        <Grid className={styles['results']} type="products" items={getViewItems(products, viewableProducts)} />
        <Button
          className={`${viewButton ? styles['view-button'] : styles['not-view-button']}`}
          label='VIEW ALL'
          fontFamily='helvetica-regular'
        />
      </div>
    </section>
  );
};
