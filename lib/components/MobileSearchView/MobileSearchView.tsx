
import { Typography } from '@components/Typography';

import styles from './MobileSearchView.module.css';

import { MobileSearchViewProps } from '.';

export const MobileSearchView = ({ filterLabels, onClick }: MobileSearchViewProps): JSX.Element => {

  return (
    <section className={styles['container']}>
      {filterLabels.map((item, key) => (
        <button key={key} onClick={(): void => onClick(item.label)}>
          <Typography
            className={styles[`${item.selected && 'label-selected'}`]}
            label={item.label}
            fontFamily="helvetica-light"
            textSize="lg"
          />
        </button>
      ))}
    </section>
  );
};
