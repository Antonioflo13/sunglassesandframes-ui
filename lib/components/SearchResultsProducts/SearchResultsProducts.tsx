import { Grid } from '../../blocks/Grid';
import { Button, Typography } from '../../components';

import styles from './SearchResultsProducts.module.css';
import { SearchResultsProductsProps } from './types';

export const SearchResultsProducts = ({
  products,
  label,
  viewButton,
  className,
}: SearchResultsProductsProps): JSX.Element => {
  return (
    <section
      className={`
    ${products.length === 0 ? styles['hidden'] : ''} 
    ${className ? className : ''}
    `}
    >
      <Typography
        className={styles['title']}
        label={`${label} (${products.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <Grid className={styles['results']} type="products" items={products} />
      <Button
        className={`${viewButton ? styles['visible-button'] : styles['hidden-button']}`}
        label="VIEW ALL"
        fontFamily="helvetica-regular"
      />
    </section>
  );
};
