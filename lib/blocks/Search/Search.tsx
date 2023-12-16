
import { ProductsList } from '@blocks/ProductsList/ProductsList';
import { Typography } from '@components/Typography';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products }: SearchProps): JSX.Element => {

  return (
    <section className={styles['container-search']}>
      <input className={styles['input-search']} type="text" />
      <Typography label="DESIGNER (2)" fontFamily="helvetica-regular" textSize="lg" />
      <div className={styles['result-search']}>
        {designers.map(designer => (
          <Typography key={designer.id} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>
      <Typography label="PRODUCTS (1)" fontFamily="helvetica-regular" textSize="lg" />
      <ProductsList products={products} />
    </section>
  );
};
