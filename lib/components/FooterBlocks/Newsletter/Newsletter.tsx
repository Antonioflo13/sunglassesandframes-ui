import { NewsletterBlock } from '@blocks/Footer';
import { Typography } from '@components/Typography';

import styles from './Newsletter.module.css';

type NewsletterProps = {
    block: NewsletterBlock;
}
export function Newsletter({ block }: NewsletterProps): JSX.Element {

  return (
    <div className={styles['container']}>
      <Typography className={styles['title']} label={block.title} fontFamily="helvetica-regular" />
      <Typography className={styles['subtitle']} label={block.subTitle} fontFamily="helvetica-regular" />
      <form className={styles['form-email']}>
        <input className={styles['input-email']} type="email" />
        <button onClick={block.callback} className={styles['button-email']} type="submit">{block.buttonCta}</button>
      </form>
      <Typography className={styles['description']} label={block.description} fontFamily="helvetica-regular" />
    </div>
  );
}
