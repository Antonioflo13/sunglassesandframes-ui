
import { Grid } from '@blocks/Grid';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import styles from './SearchResultsProducts.module.css';

import { getViewButton, getViewItems, SearchResultsProductsProps } from '.';

export const SearchResultsProducts = ({ products, isMobileView, viewableProducts, label }: SearchResultsProductsProps): JSX.Element => {
  const viewButton = getViewButton(products.length, viewableProducts);
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
          items={getViewItems(products, viewableProducts)}
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
