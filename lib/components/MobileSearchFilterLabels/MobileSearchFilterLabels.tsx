
import { Typography } from '@components/Typography';
import { useState } from 'react';

import styles from './MobileSearchFilterLabels.module.css';

import { MobileSearchFilterLabelsProps } from '.';

export const MobileSearchFilterLabels = ({ filterLabels }: MobileSearchFilterLabelsProps): JSX.Element => {
  const [selectionsLabel, setSelectionsLabel] = useState(filterLabels);

  const onClickLabel = (clickedLabel: string): void => {
    const updatedSelections = selectionsLabel.map(selection => {
      return {
        ...selection,
        selected: selection.label === clickedLabel,
      };
    });
    return setSelectionsLabel(updatedSelections);
  };

  return (
    <section className={styles['container']}>
      {selectionsLabel.map((selection, key) => (
        <button key={key} onClick={(): void => onClickLabel(selection.label)}>
          <Typography
            className={styles[`${selection.selected && 'label-selected'}`]}
            label={selection.label}
            fontFamily="helvetica-light"
            textSize="lg"
          />
        </button>
      ))}
    </section>
  );
};
