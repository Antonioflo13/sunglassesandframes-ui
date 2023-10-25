import './Typography.css';

import { FontFamilies, Tag, TextSizes, TypographyTypes } from './types';

export type TypographyProps = {
  /**
   * The tag to use for the label
   */
  Tag?: Tag;

  /**
   * Additional CSS class for styling the label component
   */
  typographyType?: TypographyTypes;

  /**
   * The label text to display
   */
  label: string;

  /**
   * The font family to use for the label text
   */
  fontFamily: FontFamilies;

  /**
   * The size of the label
   */
  textSize?: TextSizes;

  /**
   * className for styling the label
   */
  className?: string;
};

/**
 * Label component for displaying text
 *
 * @param {TypographyProps} props - The props for the Label component.
 * @returns {JSX.Element} - The JSX element representing the label.
 */
export const Typography = ({
  Tag = 'span',
  typographyType,
  label,
  fontFamily,
  textSize = 'sm',
  className,
}: TypographyProps): JSX.Element => {
  return (
    <Tag className={`${fontFamily} label-${textSize} label-${typographyType} ${className}`}>
      {label}
    </Tag>
  );
};
