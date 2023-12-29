
import { IconWrapper } from '@components/IconWrapper';
import { Typography } from '@components/Typography';

import styles from './SearchResultsNotFound.module.css';

import { SearchResultsNotFoundProps } from '.';

export const SearchResultsNotFound = ({ icon, labelNotFound }: SearchResultsNotFoundProps): JSX.Element => {
  return (
    <section className={styles['container']}>
      <IconWrapper size={150} src={icon} alt='not found' />
      <Typography label={labelNotFound} fontFamily="helvetica-regular" />
    </section>
  );
};
