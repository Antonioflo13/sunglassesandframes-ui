
import { ProductsList } from '@blocks/ProductsList/ProductsList';
import { SearchInput } from '@components/SearchInput';
import { Typography } from '@components/Typography';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products }: SearchProps): JSX.Element => {

  return (
    <section className={styles['container-search']}>
      <SearchInput />
      <Typography label={`DESIGNER (${designers.length})`} fontFamily="helvetica-regular" textSize="lg" />
      <div className={styles['result-designers-search']}>
        {designers.map(designer => (
          <Typography key={designer.id} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>
      <Typography label={`PRODUCTS (${products.length})`} fontFamily="helvetica-regular" textSize="lg" />
      <div className={styles['result-products-search']}>
        <ProductsList products={products} />
      </div>
    </section>
  );
};
