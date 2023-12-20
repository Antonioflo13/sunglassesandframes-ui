
import { Typography } from '@components/Typography';

import styles from './MobileSearchFilterLabels.module.css';

import { MobileSearchFilterLabelsProps } from '.';

export const MobileSearchFilterLabels = ({ filterLabels, setFilterLabels }: MobileSearchFilterLabelsProps): JSX.Element => {

  const onClickLabel = (clickedLabel: string): void => {
    const updatedSelections = filterLabels.map(item => {
      return {
        ...item,
        selected: item.label === clickedLabel,
      };
    });
    return setFilterLabels(updatedSelections);
  };

  return (
    <section className={styles['container']}>
      {filterLabels.map((item, key) => (
        <button key={key} onClick={(): void => onClickLabel(item.label)}>
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
