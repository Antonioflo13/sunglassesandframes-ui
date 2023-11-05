import { TextSizes, Typography } from '../Typography';

import styles from './Price.module.css';

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
    <div className={`${styles['container-price']} ${className}`}>
      <span
        className={discount ? styles['discount'] : ''}
        dangerouslySetInnerHTML={{ __html: euro }}
      />
      <Typography
        className={discount ? styles['discount'] : ''}
        Tag="span"
        fontFamily="helvetica-regular"
        textSize={textSize}
        label={Number(price).toFixed()}
      />
    </div>
  );
};
