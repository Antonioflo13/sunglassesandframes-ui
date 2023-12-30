import { Typography } from '../../components';

import styles from './SearchResultsDesigners.module.css';
import { SearchResultsDesignersProps } from './types';

export const SearchResultsDesigners = ({
  designers,
  label,
  className,
}: SearchResultsDesignersProps): JSX.Element => {
  return (
    <section
      className={`
      ${designers.length === 0 ? styles['hidden'] : ''} 
      ${className ? className : ''}
      `}
    >
      <Typography
        className={styles['title']}
        label={`${label} (${designers.length})`}
        fontFamily="helvetica-medium"
        textSize="md"
      />
      <div
        className={`
          ${styles['results']}
          ${designers.length === 1 ? styles['item-center'] : styles['items-grid']} 
        `}
      >
        {designers.map((designer, key) => (
          <Typography
            key={key}
            className={styles['designer-item']}
            label={designer.name}
            fontFamily="helvetica-regular"
          />
        ))}
      </div>
    </section>
  );
};
