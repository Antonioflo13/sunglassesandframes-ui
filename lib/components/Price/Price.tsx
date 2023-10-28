import './Price.css';
import { Typography } from '../Typography/Typography';

export type PriceProps = {
  price: string;
  className?: string;
};

export const Price = ({ price, className }: PriceProps): JSX.Element => {
  const euro = '€';
  return (
    <div className={`container-price ${className}`}>
      <span dangerouslySetInnerHTML={{ __html: euro }} />
      <Typography Tag="h1" fontFamily="helvetica-medium" textSize="md" label={price} />
    </div>
  );
};
