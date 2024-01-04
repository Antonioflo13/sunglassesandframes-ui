import { Copyright } from '@components/FooterBlocks/Copyright';
import { Cta } from '@components/FooterBlocks/Cta';
import { Icons } from '@components/FooterBlocks/Icons';
import { Logo } from '@components/FooterBlocks/Logo';
import { Menu } from '@components/FooterBlocks/Menu';
import { Newsletter } from '@components/FooterBlocks/Newsletter';
import { useCallback } from 'react';

import styles from './Footer.module.css';

import { Block, BlockTypes, CopyrightBlock, CtaBlock, FooterProps, IconsBlock, LogoBlock, MenuBlock, NewsletterBlock } from '.';

export function Footer({ blocks }: FooterProps): JSX.Element {

  const gridDesktop: Block[][] = Array.from(
    { length: Math.max(...blocks.map(block => block.position.desktop.row)) },
    () => []
  );
  blocks.forEach(block => {
    const row = block.position.desktop.row - 1;
    gridDesktop[row].push(block);
  });

  const gridMobile: Block[][] = Array.from(
    { length: Math.max(...blocks.map(block => block.position.mobile.row)) },
    () => []
  );
  blocks.forEach(block => {
    const row = block.position.mobile.row - 1;
    gridMobile[row].push(block);
  });

  const footerBlocks = useCallback((block: Block) => {
    switch (block.type) {

      case BlockTypes.LOGO_BLOCK:
        return <Logo block={block as LogoBlock} />;

      case BlockTypes.CTA_BLOCK:
        return <Cta block={block as CtaBlock} />;

      case BlockTypes.NEWSLETTER_BLOCK:
        return <Newsletter block={block as NewsletterBlock} />;

      case BlockTypes.ICONS_BLOCK:
        return <Icons block={block as IconsBlock} />;

      case BlockTypes.MENU_BLOCK:
        return <Menu block={block as MenuBlock} />;

      case BlockTypes.COPYRIGHT_BLOCK:
        return <Copyright block={block as CopyrightBlock} />;

      default:
        console.warn(`Unknown block type: ${block.type}`);
        return null;
    }
  }, []);

  return (
    <footer className={styles['container']}>
      {gridDesktop.map((row, key) => (
        console.log('row', row),
        <div key={key} className={styles['row']}>
          {row.map((block, key) => (
            <div
              key={key}
              className={`
              ${styles['blocks']}
              ${styles[`desktop-${block.position.desktop.disposition}`]}
              ${styles[`mobile-${block.position.mobile.disposition}`]}
            `}
            >
              {footerBlocks(block)}
            </div>
          ))}
        </div>
      ))}
    </footer>
  );
}
