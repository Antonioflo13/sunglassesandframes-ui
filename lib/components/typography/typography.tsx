import './Typography.css';
import { FontFamilies, LabelTag, TextSizes, TypographyTypes } from '.';

export interface TypographyProps {
  labelTag?: LabelTag;
  labelType?: TypographyTypes;
  label: string;
  fontFamily: FontFamilies;
  textSize?: TextSizes;
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
