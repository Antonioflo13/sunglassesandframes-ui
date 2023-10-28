import { ButtonProps, TypographyProps } from '../../components';

interface Button extends ButtonProps {
  callback: ButtonProps['callback'];
}

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
   * @property {TypographyProps} title
   */
  title: TypographyProps;

  /**
   * The subtitle for the Info Box
   *
   * @property {TypographyProps} subtitle
   */
  subtitle?: TypographyProps;

  /**
   * The description for the Info Box
   *
   * @property {TypographyProps} description
   */
  description?: TypographyProps;

  /**
   * The date in the specified format "dd/mm/yyyy"
   *
   * @property {Date} date
   */
  date?: Date;

  /**
   * The button properties for the Info Box
   *
   * @property {Button} button
   */
  button?: Button;
};
