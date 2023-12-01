
import { IconWrapper } from '@components/IconWrapper';
import { Typography } from '@components/Typography';
import { AnimatePresence, motion } from 'framer-motion';
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
              <button className={styles.accordionIcon} onClick={(): void => toggleAccordion(key)}>
                {item.open ? <IconWrapper src='' alt='minus' /> : <IconWrapper src='' alt='plus' />}
              </button>
            </div>
            <AnimatePresence>
              {item.open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0 }}
                >
                  <Typography label={item.description} fontFamily="helvetica-regular" textSize="sm" />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </section>
  );
};
