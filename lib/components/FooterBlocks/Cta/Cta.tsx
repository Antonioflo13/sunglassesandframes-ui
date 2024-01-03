import { CtaBlock } from '@blocks/Footer';
import { IconWrapper } from '@components/IconWrapper';
import { Typography } from '@components/Typography';

import styles from './Cta.module.css';

type CtaProps = {
    block: CtaBlock;
}
export function Cta({ block }: CtaProps): JSX.Element {

  return (
    <section>
      <Typography className={styles['title']} label={block.item} fontFamily="helvetica-regular" />
      <div className={styles['container-grid']}>
        {block.items.map((item, key) => (
          <div className={styles['container-item']} key={key}>
            <IconWrapper size={22} src={item.icon} alt={item.title} />
            <div className={styles['content']}>
              <Typography label={item.title} fontFamily="helvetica-regular" />
              <Typography label={item.description} fontFamily="helvetica-regular" />
              <Typography className={styles['cta']} label={item.cta} fontFamily="helvetica-regular" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
