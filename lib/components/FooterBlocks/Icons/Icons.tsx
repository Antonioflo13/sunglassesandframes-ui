import { IconsBlock } from '@blocks/Footer';
import { IconWrapper } from '@components/IconWrapper';

import styles from './Icons.module.css';

type IconsProps = {
  block: IconsBlock;
};

export function Icons({ block }: IconsProps): JSX.Element {

  return (
    <section>
      <div className={styles['container-icons']}>
        {block.icons.map((item, key) => (
          <div key={key}>
            <IconWrapper
              className={styles['icon']}
              src={item.icon}
              size={38}
            />
          </div>
        ))}
      </div>
      <div className={styles['container-icons-social']}>
        {block.socialIcons.map((item, key) => (
          <div key={key} onClick={item.callback}>
            <IconWrapper
              className={styles['icon-social']}
              src={item.icon}
              size={25}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
