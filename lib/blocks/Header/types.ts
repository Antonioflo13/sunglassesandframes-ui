import { HeaderItemModel } from '../../components/HeaderItem';

type BlocksPosition = 'left' | 'middle-left' | 'center' | 'middle-right' | 'right';

type Blocks = {
  type: BlocksPosition;
  items: HeaderItemModel[];
  gap?: `${number}px`;
};

export interface HeaderProps {
  /**
   *  An array of header items to display in the header
   */
  blocks: Blocks[];

  /**
   *  Extend class name component
   */
  className?: string;
}
