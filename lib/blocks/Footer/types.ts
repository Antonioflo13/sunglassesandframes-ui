export enum BlockTypes {
  LOGO_BLOCK = 'LOGO_BLOCK',
  CTA_BLOCK = 'CTA_BLOCK',
  NEWSLETTER_BLOCK = 'NEWSLETTER_BLOCK',
  ICONS_BLOCK = 'ICONS_BLOCK',
  MENU_BLOCK = 'MENU_BLOCK',
  COPYRIGHT_BLOCK = 'COPYRIGHT_BLOCK',
}

type CallbackFunction = () => void;

type BaseBlock = {
  type: BlockTypes;
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

type BaseIcons = {
  icon: string;
};

type SocialIcons = BaseIcons & {
  callback: CallbackFunction;
};

export type IconsBlock = BaseBlock & {
  icons: BaseIcons[];
  socialIcons: SocialIcons[];
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

type Margin = {
  top: number;
  bottom: number;
}

export enum PositionType {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  TYPE_COLUMNS = 'columns',
}

export type Columns = LogoBlock | CtaBlock | NewsletterBlock | IconsBlock | MenuBlock | CopyrightBlock;

export type Rows = {
  margin: Margin;
  separator: boolean;
  position: PositionType;
  columns: Columns[];
};

type Blocks = {
  rows: Rows[];
}

export type FooterProps = {
  blocks: Blocks;
};
