import { IconsBlock } from '@blocks/Footer';
import { IconWrapper } from '@components/IconWrapper';

import styles from './Icons.module.css';

type IconsProps = {
  block: IconsBlock;
};

export function Icons({ block }: IconsProps): JSX.Element {

  return (
    <section className={styles['container']}>
      {block.items.map((item, key) => (
        <div key={key} onClick={item.callback}>
          <IconWrapper
            className={`${styles['icon']} ${item.callback && styles['cursor-pointer']}`}
            src={item.icon}
            size={item.callback ? 25 : 38}
          />
        </div>
      ))}
    </section>
  );
}
