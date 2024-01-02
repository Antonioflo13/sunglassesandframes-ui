import { CopyrightBlock, Position } from '@blocks/Footer';

import styles from './Copyright.module.css';

type CopyrightProps = {
    block: CopyrightBlock;
    position: Position;
}
export function Copyright({ block, position }: CopyrightProps): JSX.Element {

  return (
    <div className={styles[`${position.desktop.disposition} ${position.mobile.disposition}`]}>
      {block.label}
    </div>
  );
}
