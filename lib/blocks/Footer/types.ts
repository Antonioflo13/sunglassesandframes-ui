export enum BlockTypes {
  LOGO_BLOCK = 'LOGO_BLOCK',
  CTA_BLOCK = 'CTA_BLOCK',
  NEWSLETTER_BLOCK = 'NEWSLETTER_BLOCK',
  ICONS_BLOCK = 'ICONS_BLOCK',
  MENU_BLOCK = 'MENU_BLOCK',
  COPYRIGHT_BLOCK = 'COPYRIGHT_BLOCK',
}

type Disposition = 'left' | 'center' | 'right' | undefined;

type Desktop = {
    row: number | undefined;
    disposition: Disposition;
    column: number | undefined;
}

type Mobile = {
    row: number | undefined;
    disposition: Disposition;
}

export type Position = {
  desktop: Desktop;
  mobile: Mobile;
};

type CallbackFunction = () => void;

type BaseBlock = {
  type: BlockTypes;
  position: Position;
};

export type LogoBlock = BaseBlock & {
  logo: JSX.Element;
  callback: CallbackFunction;
};

type CtaItems = {
  icon: string;
  title: string;
  description: string;
  cta: string;
  callback: CallbackFunction;
};

export type CtaBlock = BaseBlock & {
  items: CtaItems[];
  item: string;
};

export type NewsletterBlock = BaseBlock & {
  title: string;
  subTitle: string;
  buttonCta: string;
  description: string;
  callback: CallbackFunction;
};

type IconsItems = {
  icon: string;
  callback?: CallbackFunction;
};

export type IconsBlock = BaseBlock & {
  items: IconsItems[];
};

type MenuItems = {
  label: string;
  callback: CallbackFunction;
};

export type MenuBlock = BaseBlock & {
  items: MenuItems[];
  item: string;
};

export type CopyrightBlock = BaseBlock & {
  label: string;
};

export type Block = LogoBlock | CtaBlock | NewsletterBlock | IconsBlock | MenuBlock | CopyrightBlock;

export type FooterProps = {
  blocks: Block[];
};
