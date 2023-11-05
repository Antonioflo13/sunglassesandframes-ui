import styles from './Typography.module.css';
import { TypographyProps } from './types';

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
    <Tag
      className={`
      ${styles[`${fontFamily}`]} 
      ${styles[`label-${textSize}`]} 
      ${styles[`label-${typographyType}`]} 
      ${className}
      `}
    >
      {label}
    </Tag>
  );
};
