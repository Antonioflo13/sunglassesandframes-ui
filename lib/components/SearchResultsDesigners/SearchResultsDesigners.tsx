import React, { useCallback } from 'react';

import { Designer } from '../../blocks/Search';
import { Typography } from '../../components';

import styles from './SearchResultsDesigners.module.css';
import { SearchResultsDesignersProps } from './types';

export const SearchResultsDesigners = ({
  designers,
  label,
  className,
}: SearchResultsDesignersProps): JSX.Element => {
  const component = useCallback((item: Designer) => {
    const designer = (
      <Typography
        className={styles['designer-item']}
        label={item.title}
        fontFamily="helvetica-regular"
      />
    );

    switch (item.wrapper) {
      case undefined:
        return designer;
      default:
        return item.wrapper(designer);
    }
  }, []);

  return (
    <section
      className={`
      ${designers?.items.length === 0 ? styles['hidden'] : ''} 
      ${className ? className : ''}
      `}
    >
      <Typography
        className={styles['title']}
        label={`${label} (${designers?.resultNumber})`}
        fontFamily="helvetica-medium"
        textSize="md"
      />
      <div
        className={`
          ${styles['results']}
          ${designers?.items.length === 1 ? styles['item-center'] : styles['items-grid']} 
        `}
      >
        {designers?.items.map((designer, idx) => (
          <React.Fragment key={idx}>{component(designer)}</React.Fragment>
        ))}
      </div>
    </section>
  );
};
