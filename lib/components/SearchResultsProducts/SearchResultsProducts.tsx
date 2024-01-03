import { Grid } from '../../blocks/Grid';
import { Button, Typography } from '../../components';

import styles from './SearchResultsProducts.module.css';
import { SearchResultsProductsProps } from './types';

export const SearchResultsProducts = ({
  products,
  label,
  viewButton,
  onClickViewAll,
  className,
}: SearchResultsProductsProps): JSX.Element => {
  return (
    <section
      className={`
    ${products?.items.length === 0 ? styles['hidden'] : ''} 
    ${className ? className : ''}
    `}
    >
      <Typography
        className={styles['title']}
        label={`${label} (${products?.resultNumber})`}
        fontFamily="helvetica-medium"
        textSize="md"
      />
      {products && <Grid className={styles['results']} type="products" items={products.items} />}
      <Button
        className={`${viewButton ? styles['visible-button'] : styles['hidden-button']}`}
        label="VIEW ALL"
        fontFamily="helvetica-regular"
        callback={onClickViewAll}
      />
    </section>
  );
};
