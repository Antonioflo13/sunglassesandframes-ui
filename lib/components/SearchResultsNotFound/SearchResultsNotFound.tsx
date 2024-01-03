import { ImageWrapper, Typography } from '../../components';

import styles from './SearchResultsNotFound.module.css';
import { SearchResultsNotFoundProps } from './types';

export const SearchResultsNotFound = ({
  image,
  label,
  className,
}: SearchResultsNotFoundProps): JSX.Element => {
  return (
    <section className={`${styles['container']} ${className ? className : ''}`}>
      <ImageWrapper typeImage="search-not-found">{image}</ImageWrapper>
      <Typography label={label} fontFamily="helvetica-regular" />
    </section>
  );
};
