
import { Typography } from '@components/Typography';

import styles from './SearchResultsDesigners.module.css';

import { SearchResultsDesignersProps } from '.';

export const SearchResultsDesigners = ({ designers, isMobileView }: SearchResultsDesignersProps): JSX.Element => {
  const singleResult = designers.length === 1;
  return (
    <section>
      <Typography
        className={styles['title']}
        label={`DESIGNER (${designers.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`
          ${styles['results']} 
          ${singleResult ? styles['item-center'] : styles['items-grid']} 
          ${!isMobileView && styles['not-visible']}
        `}>
        {designers.map((designer, key) => (
          <Typography key={key} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>
    </section>
  );
};
