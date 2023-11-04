import './Price.css';

import { TextSizes, Typography } from '../Typography';

export type PriceProps = {
  price: string | number;
  className?: string;
  discount?: boolean;
  textSize?: TextSizes;
};

export const Price = ({
  price,
  className,
  discount = false,
  textSize = 'md',
}: PriceProps): JSX.Element => {
  const euro = '€';
  return (
    <div className={`container-price ${className}`}>
      <span className={discount ? 'discount' : ''} dangerouslySetInnerHTML={{ __html: euro }} />
      <Typography
        className={discount ? 'discount' : ''}
        Tag="span"
        fontFamily="helvetica-regular"
        textSize={textSize}
        label={price}
      />
    </div>
  );
};
