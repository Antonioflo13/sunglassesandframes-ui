import './Typography.css';
import { FontFamilies, LabelTag, TextSizes, TypographyTypes } from '.';

/**
 * Props for a label component.
 * @param {TypographyProps} props - The props for the Label component.
 */
export type TypographyProps = {
  /**
   * labelTag the tag to use for the label.
   */
  labelTag?: LabelTag;

  /**
   * Additional CSS class for styling the label component.
   */
  labelType?: TypographyTypes;

  /**
   * The label text to display.
   */
  label: string;

  /**
   * The font family to use for the label text.
   */
  fontFamily: FontFamilies;

  /**
   * The size of the label.
   */
  textSize?: TextSizes;

  /**
   * className for styling the label
   */
  className?: string;
}

/**
 * Label component for displaying text.
 *
 * @param {TypographyProps} props - The props for the Label component.
 * @returns {JSX.Element} - The JSX element representing the label.
 */
export const Typography = ({
  labelTag = 'span',
  labelType,
  label,
  fontFamily,
  textSize = 'sm',
  className
}: TypographyProps): JSX.Element => {
  const LabelTag = labelTag;
  return (
    <LabelTag className={`${fontFamily} label-${textSize} label-${labelType} ${className}`}>
      {label}
    </LabelTag>
  );
};
