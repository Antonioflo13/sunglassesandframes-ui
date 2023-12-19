import { ButtonProps, TypographyProps } from '../../components';

type DateFormat = `${number}${number}/${number}${number}/${number}${number}${number}${number}`;

interface Date extends TypographyProps {
  label: DateFormat;
}

export type InfoBoxprops = {
  /**
   * Additional React elements or content to display inside the image wrapper
   */
  children: React.ReactNode;

  /**
   * The title for the Info Box
   *
   */
  title: TypographyProps;

  /**
   * The subtitle for the Info Box
   *
   */
  subtitle?: TypographyProps;

  /**
   * The description for the Info Box
   *
   */
  description?: TypographyProps;

  /**
   * The date in the specified format "dd/mm/yyyy"
   *
   */
  date?: Date;

  /**
   * The button properties for the Info Box
   *
   */
  button?: ButtonProps;

  className?: string;
};
