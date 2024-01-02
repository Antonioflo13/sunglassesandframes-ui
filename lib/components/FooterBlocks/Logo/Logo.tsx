import { LogoBlock, Position } from '@blocks/Footer';

import styles from './Logo.module.css';

type LogoProps = {
    block: LogoBlock;
    position: Position;
}
export function Logo({ block, position }: LogoProps): JSX.Element {

  return (
    <div
      className={styles[`${position.desktop.disposition} ${position.mobile.disposition}`]}
      onClick={block.callback}
    >
      {block.logo}
    </div>
  );
}
