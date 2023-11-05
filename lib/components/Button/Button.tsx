import { Typography } from '../Typography';

import styles from './Button.module.css';
import { ButtonProps } from './types';

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
  callback,
  className,
  textSize,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`
      ${styles['button']} 
      ${styles[`button-${size}`]}
      ${styles[`button-${type}`]} 
      ${className}
      `}
      {...props}
      onClick={callback}
    >
      <Typography
        label={label}
        typographyType={typographyType}
        fontFamily={fontFamily}
        textSize={textSize}
      />
    </button>
  );
};
