import { MenuBlock } from '@blocks/Footer';
import { Typography } from '@components/Typography';

import styles from './Menu.module.css';

type MenuProps = {
    block: MenuBlock;
}

export function Menu({ block }: MenuProps): JSX.Element {

  return (
    <section className={styles['container']}>
      <Typography label={block.item} fontFamily="helvetica-regular" />
      {block.items.map((item, key) => (
        <div key={key} onClick={item.callback}>
          <Typography className={styles['menu-item']} label={item.label} fontFamily="helvetica-regular" />
        </div>
      ))}
    </section>
  );
}