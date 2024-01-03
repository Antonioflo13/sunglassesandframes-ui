import { LogoBlock } from '@blocks/Footer';

import styles from './Logo.module.css';

type LogoProps = {
    block: LogoBlock;
}
export function Logo({ block }: LogoProps): JSX.Element {

  return (
    <div className={styles['container']} onClick={block.callback}>
      {block.logo}
    </div>
  );
}
