import './Button.css';

import { Typography, TypographyProps } from '../Typography/Typography';

import { Sizes, Types } from './types';

interface ButtonProps {
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
  label: string;
}

/**
 * Button component: A customizable button element with various styling options.
 *
 * @param {ButtonProps} props - The props for the Label component.
 * @returns {JSX.Element} - The JSX element representing the label.
 */
export const Button = ({
  type = 'primary',
  size = 'base',
  typographyType,
  label,
  fontFamily,
  ...props
}: ButtonProps & TypographyProps): JSX.Element => {
  return (
    <button type="button" className={`button button-${size} button-${type}`} {...props}>
      <Typography label={label} typographyType={typographyType} fontFamily={fontFamily} />
    </button>
  );
};
