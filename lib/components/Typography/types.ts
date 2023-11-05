export type TypographyTypes = 'in-stock' | 'selected' | 'shadow';

export type FontFamilies =
  | 'artegra'
  | 'artegra-bold'
  | 'helvetica-light'
  | 'helvetica-regular'
  | 'helvetica-medium';

export type TextSizes = 'sm' | 'md' | 'lg' | 'xl';

export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

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
  label: string | number;

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
