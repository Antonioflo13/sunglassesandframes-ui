import { HeaderItemModel } from '../../components/HeaderItem';

export interface HeaderProps {
    /**
     *  An array of header items to display in the header
     */
    items: HeaderItemModel[];

    /**
     *  Extend class name component
     */
    className?: string;
  }