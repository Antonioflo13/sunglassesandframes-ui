import { MenuBlock } from '@blocks/Footer';
import { IconWrapper } from '@components/IconWrapper';
import { Typography } from '@components/Typography';
import { useState } from 'react';

import styles from './Menu.module.css';

type MenuProps = {
    block: MenuBlock;
}

export function Menu({ block }: MenuProps): JSX.Element {
  const [accordionState, setAccordionState] = useState(block.accordion.isOpen);

  const toggleAccordion = (): void => {
    setAccordionState(prevState => !prevState);
  };

  return (
    <section className={styles['container']}>
      <div className={styles['container-title-accordion']}>
        <div onClick={toggleAccordion}>
          <Typography label={block.item} fontFamily="helvetica-medium" />
        </div>
        <div className={styles['container-accordion']} onClick={toggleAccordion}>
          {accordionState
            ? <IconWrapper src={block.accordion.icons.close} size={12} />
            : <IconWrapper src={block.accordion.icons.open} size={12} />
          }
        </div>
      </div>
      {accordionState && (
        block.items.map((item, key) => (
          <div key={key} onClick={item.callback}>
            <Typography className={styles['menu-item']} label={item.label} fontFamily="helvetica-light" />
          </div>
        )))
      }
    </section>
  );
}