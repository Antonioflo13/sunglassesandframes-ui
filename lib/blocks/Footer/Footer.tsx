import { Copyright } from '@components/FooterBlocks/Copyright';
import { Cta } from '@components/FooterBlocks/Cta';
import { Icons } from '@components/FooterBlocks/Icons';
import { Logo } from '@components/FooterBlocks/Logo';
import { Menu } from '@components/FooterBlocks/Menu';
import { Newsletter } from '@components/FooterBlocks/Newsletter';
import { useCallback } from 'react';

import styles from './Footer.module.css';

import {
  BlockTypes,
  Columns,
  CopyrightBlock,
  CtaBlock,
  FooterProps,
  IconsBlock,
  LogoBlock,
  MenuBlock,
  NewsletterBlock,
} from '.';

export function Footer({ blocks }: FooterProps): JSX.Element {

  const footerBlocks = useCallback((columns: Columns) => {
    switch (columns.type) {
      case BlockTypes.LOGO_BLOCK:
        return <Logo block={columns as LogoBlock} />;

      case BlockTypes.CTA_BLOCK:
        return <Cta block={columns as CtaBlock} />;

      case BlockTypes.NEWSLETTER_BLOCK:
        return <Newsletter block={columns as NewsletterBlock} />;

      case BlockTypes.ICONS_BLOCK:
        return <Icons block={columns as IconsBlock} />;

      case BlockTypes.MENU_BLOCK:
        return <Menu block={columns as MenuBlock} />;

      case BlockTypes.COPYRIGHT_BLOCK:
        return <Copyright block={columns as CopyrightBlock} />;

      default:
        console.warn(`Unknown block type: ${columns.type}`);
        return null;
    }
  }, []);

  return (
    <footer className={styles['container']}>
      {blocks.rows.map((row, key) => (
        console.log('row', row),
        <div
          key={key}
          className={`${styles['row']} ${styles[`position-${row.position}`]}`}>
          {row.columns.map((column, key) => (
            <div key={key}>
              {footerBlocks(column)}
            </div>
          ))}
        </div>
      ))}
    </footer>
  );
}
