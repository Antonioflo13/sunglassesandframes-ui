
import { Typography } from '@components/Typography';

import styles from './SearchResultsDesigners.module.css';

import { SearchResultsDesignersProps } from '.';

export const SearchResultsDesigners = ({ designers, isMobileView, label }: SearchResultsDesignersProps): JSX.Element => {
  return (
    <section >
      <Typography
        className={`${styles['title']} ${designers.length === 0 && styles['not-found']}`}
        label={`${label} (${designers.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`
          ${styles['results']} 
          ${designers.length === 1 ? styles['item-center'] : styles['items-grid']} 
          ${!isMobileView && styles['not-visible']}
        `}>
        {designers.map((designer, key) => (
          <Typography key={key} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>
    </section>
  );
};
