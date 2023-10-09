import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'base';
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  backgroundColor,
  size = 'base',
  label,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${type}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <label className={`label label--${size}`}>{label}</label>
    </button>
  );
};
