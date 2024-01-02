import styles from './Footer.module.css';

import { BlockTypes, CtaBlock, FooterProps, LogoBlock } from '.';

export function Footer({ blocks }: FooterProps): JSX.Element {

  const logoBlock = (block: LogoBlock): JSX.Element => {
    return (
      <div onClick={block.callback}>
        {block.logo}
      </div>
    );
  };

  return (
    <>
      {blocks.map((block, key) => (
        <footer className={styles['container']} key={key}>
          {block.type === BlockTypes.LOGO_BLOCK
          && <div className={styles[`logo ${block.position.desktop.disposition}`]}>
            {logoBlock(block as LogoBlock)}
          </div>
          }
        </footer>
      ))}
    </>
  );

}
