
import { IconWrapper } from '@components/IconWrapper';
import { Typography } from '@components/Typography';
import { useState } from 'react';

import styles from './Accordion.module.css';

import { AccordionProps } from '.';

export const Accordion = ({ accordion }: AccordionProps): JSX.Element => {
  const [accordionState, setAccordionState] = useState(accordion);

  const toggleAccordion = (key: number): void => {
    setAccordionState(prevState => {
      return prevState.map((accordion, i) => {
        if (i === key) {
          return { ...accordion,
            open: !accordion.open };
        }
        else {
          return accordion;
        }
      });
    });
  };

  return (
    <section>
      <ul className={styles.container}>
        {accordionState.map((item, key): JSX.Element => (
          <li className={styles.accordion} key={key}>
            <div className={styles.header}>
              <Typography label={item.title} fontFamily="helvetica-regular" textSize="sm" />
              <button className={styles.accordionIcon} onClick={() => toggleAccordion(key)}>{item.open ? <IconWrapper src='' name='minus' /> : <IconWrapper src='' name='plus' />}</button>
            </div>
            {item.open && <Typography label={item.description} fontFamily="helvetica-regular" textSize="sm" />}
          </li>
        ))}
      </ul>
    </section>
  );
};
