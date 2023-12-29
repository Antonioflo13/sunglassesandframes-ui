
import { ImageWrapper } from '@components/ImageWrapper';
import { Typography } from '@components/Typography';

import styles from './SearchResultsNotFound.module.css';

import { SearchResultsNotFoundProps } from '.';

export const SearchResultsNotFound = ({ image, labelNotFound }: SearchResultsNotFoundProps): JSX.Element => {
  return (
    <section className={styles['container']}>
      <ImageWrapper typeImage="image-icon">
        <img src={image} alt='not found image' />
      </ImageWrapper>
      <Typography label={labelNotFound} fontFamily="helvetica-regular" />
    </section>
  );
};
