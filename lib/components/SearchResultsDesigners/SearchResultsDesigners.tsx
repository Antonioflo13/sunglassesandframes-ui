
import { Typography } from '@components/Typography';

import styles from './SearchResultsDesigners.module.css';

import { SearchResultsDesignersProps } from '.';

export const SearchResultsDesigners = ({ designers, mobileView }: SearchResultsDesignersProps): JSX.Element => {
  return (
    <section>
      <Typography
        className={styles['title']}
        label={`DESIGNER (${designers.length})`}
        fontFamily="helvetica-regular"
        textSize="lg"
      />
      <div className={`${styles['results']} ${!mobileView && styles['not-visible']}`}>
        {designers.map((designer, key) => (
          <Typography key={key} label={designer.name} fontFamily="helvetica-regular" textSize="lg" />
        ))}
      </div>
    </section>
  );
};
