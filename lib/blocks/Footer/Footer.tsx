import { Copyright } from '@components/FooterBlocks/Copyright/Copyright';
import { Cta } from '@components/FooterBlocks/Cta/Cta';
import { Icons } from '@components/FooterBlocks/Icons/Icons';
import { Logo } from '@components/FooterBlocks/Logo/Logo';
import { Menu } from '@components/FooterBlocks/Menu/Menu';
import { Newsletter } from '@components/FooterBlocks/Newsletter/Newsletter';

import styles from './Footer.module.css';

import { BlockTypes, CopyrightBlock, CtaBlock, FooterProps, IconsBlock, LogoBlock, MenuBlock, NewsletterBlock } from '.';

export function Footer({ blocks }: FooterProps): JSX.Element {

  return (
    <>
      {blocks.map((block, key) => (
        <footer className={styles['container']} key={key}>
          {block.type === BlockTypes.LOGO_BLOCK && <Logo block={block as LogoBlock} position={block.position} />}
          {block.type === BlockTypes.CTA_BLOCK && <Cta block={block as CtaBlock} />}
          {block.type === BlockTypes.NEWSLETTER_BLOCK && <Newsletter block={block as NewsletterBlock} />}
          {block.type === BlockTypes.ICONS_BLOCK && <Icons block={block as IconsBlock} />}
          {block.type === BlockTypes.MENU_BLOCK && <Menu block={block as MenuBlock} />}
          {block.type === BlockTypes.COPYRIGHT_BLOCK && <Copyright block={block as CopyrightBlock} position={block.position} />}
        </footer>
      ))}
    </>
  );
}
