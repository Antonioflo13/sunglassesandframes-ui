
import { ImageWrapper } from '@components/ImageWrapper';
import { Typography } from '@components/Typography';

import styles from './SearchResultsNotFound.module.css';

import { SearchResultsNotFoundProps } from '.';

export const SearchResultsNotFound = ({ icon, labelNotFound }: SearchResultsNotFoundProps): JSX.Element => {
  return (
    <section className={styles['container']}>
      <ImageWrapper typeImage="image-icon">
        <img src={icon} alt='not found image' />
      </ImageWrapper>
      <Typography label={labelNotFound} fontFamily="helvetica-regular" />
    </section>
  );
};
