import { ImageWrapper, Typography } from '../../components';

import styles from './SearchResultsNotFound.module.css';
import { SearchResultsNotFoundProps } from './types';

export const SearchResultsNotFound = ({
  image,
  label,
}: SearchResultsNotFoundProps): JSX.Element => {
  return (
    <section className={styles['container']}>
      <ImageWrapper typeImage="search-not-found">{image}</ImageWrapper>
      <Typography label={label} fontFamily="helvetica-regular" />
    </section>
  );
};
