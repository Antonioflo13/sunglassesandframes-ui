import { LogoBlock } from '@blocks/Footer';

import styles from './Logo.module.css';

type LogoProps = {
    block: LogoBlock;
}
export function Logo({ block }: LogoProps): JSX.Element {

  return (
    <section className={styles['container']} onClick={block.callback}>
      {block.logo}
    </section>
  );
}
