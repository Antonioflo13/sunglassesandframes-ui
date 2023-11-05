import { TypographyProps } from '../Typography';

export type Types = 'primary' | 'outlined';
export type Sizes = 'base';

export interface ButtonProps extends TypographyProps {
  /**
   * Specifies the type of the button
   */
  type?: Types;

  /**
   * Determines the size of the button
   */
  size?: Sizes;

  /**
   *  The text label that appears on the button
   */
  label: string | number;

  /**
   *  Extend class name component
   */
  className?: string;

  /**
   * A callback function to be executed when the button is clicked
   */
  callback?: () => void;
}
