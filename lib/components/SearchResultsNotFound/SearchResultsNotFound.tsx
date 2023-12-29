
import { Typography } from '@components/Typography';

import { SearchResultsNotFoundProps } from '.';

export const SearchResultsNotFound = ({ icon, labelNotFound }: SearchResultsNotFoundProps): JSX.Element => {
  return (
    <section>
      <img src={icon} />
      <Typography label={labelNotFound} fontFamily="helvetica-regular" />
    </section>
  );
};
