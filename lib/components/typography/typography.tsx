import './label.css';
import { FontFamilies, TextSizes, TypographyTypes } from './typography-types';

/**
 * Props for a label component.
 * @interface
 */
export interface TypographyProps {
  /**
   * The label text to display.
   */
  label: string;

  /**
   * Additional CSS class for styling the label component.
   */
  labelType?: TypographyTypes;

  /**
   * The font family to use for the label text.
   */
  fontFamily: FontFamilies;

  /**
   * The size of the label.
   */
  textSize?: TextSizes;
}

/**
 * Label component for displaying text.
 *
 * @param {TypographyProps} props - The props for the Label component.
 * @returns {JSX.Element} - The JSX element representing the label.
 */
export const Typography = ({
  label,
  labelType,
  fontFamily,
  textSize = 'sm',
  ...props
}: TypographyProps): JSX.Element => {
  return (
    <label className={`${fontFamily} label-${textSize} label-${labelType}`} {...props}>
      {label}
    </label>
  );
};
