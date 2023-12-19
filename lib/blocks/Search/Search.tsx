
import { SearchInput } from '@components/SearchInput';
import { Typography } from '@components/Typography';

import styles from './Search.module.css';

import { SearchProps } from '.';

export const Search = ({ designers, products }: SearchProps): JSX.Element => {

  return (
    <section className={styles['container']}>
      <SearchInput />
      <Typography className={styles['title-desktop']} label={`DESIGNER (${designers.length})`} fontFamily="helvetica-regular" textSize="lg" />
      <div className={styles[`results ${designers.length > 1 && 'results-designers'} `]}>
        {designers.map(designer => (
          <Typography key={designer.id} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>
      <Typography className={styles['title-desktop']} label={`PRODUCTS (${products.length})`} fontFamily="helvetica-regular" textSize="lg" />
      <div className={styles['results']}>
        <div>ciao</div>
      </div>
    </section>
  );
};
