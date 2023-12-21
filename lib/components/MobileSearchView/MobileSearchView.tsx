
import { Typography } from '@components/Typography';

import styles from './MobileSearchView.module.css';

import { MobileSearchViewProps } from '.';

export const MobileSearchView = ({ filterLabels, setFilterLabels }: MobileSearchViewProps): JSX.Element => {

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
