import { Label, LabelProps } from '../Label/Label';

import './button.css';
import { Sizes, Types } from './buttonTypes';

interface ButtonProps {
  // Specifies the type of the button
  type?: Types;

  // Determines the size of the button
  size?: Sizes.Base;

  // The text label that appears on the button
  label: string;
}

/**
 * Button component: A customizable button element with various styling options.
 *
 * @param {ButtonProps} props - The props for the Label component.
 * @returns {JSX.Element} - The JSX element representing the label.
 */
export const Button = ({
  type = Types.Primary,
  size = Sizes.Base,
  labelType,
  label,
  fontFamily,
  ...props
}: ButtonProps & LabelProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`button-${size} button-${type}`}
      {...props}
    >
      <Label label={label} labelType={labelType} fontFamily={fontFamily} />
    </button>
  );
};
