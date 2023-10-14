import './Label.css';
import { FontFamilies, TextSizes } from './labelTypes';

/**
 * Props for a label component.
 * @interface
 */
export interface LabelProps {
  /**
   * The label text to display.
   */
  label: string;

  /**
   * Additional CSS class for styling the label component.
   */
  labelType?: 'in-stock' | 'selected';

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
 * @param {LabelProps} props - The props for the Label component.
 * @returns {JSX.Element} - The JSX element representing the label.
 */
export const Label = ({
  label,
  labelType,
  fontFamily,
  textSize = TextSizes.Sm,
  ...props
}: LabelProps): JSX.Element => {
  return (
    <label className={`${fontFamily} label-${textSize} label-${labelType}`} {...props}>
      {label}
    </label>
  );
};
