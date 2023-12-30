import { Button } from '../../components';

import styles from './MobileSearchViewLabels.module.css';
import { MobileSearchLabelsProps } from './types';

export const MobileSearchViewLabels = ({
  viewLabels,
  onClick,
}: MobileSearchLabelsProps): JSX.Element => {
  return (
    <section className={styles['container-search-view-labels']}>
      {viewLabels.map((item, idx) => (
        <Button
          key={idx}
          label={item.label}
          type="outlined"
          typographyType={item.selected ? 'selected' : undefined}
          fontFamily="helvetica-light"
          callback={(): void => onClick(item.label)}
        />
      ))}
    </section>
  );
};
