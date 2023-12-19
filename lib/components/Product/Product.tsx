import { ImageWrapper } from '../ImageWrapper';
import { Price } from '../Price';
import { Typography } from '../Typography';

import styles from './Product.module.css';
import { ProductProps } from './types';

export const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <div className={styles['container-product']} onClick={product.callback ?? product.callback}>
      <ImageWrapper typeImage="plp">{product.image}</ImageWrapper>
      <div className={styles['container-product-info']}>
        <Price className={styles['price']} price={product.price} />
        <Typography
          Tag="h3"
          fontFamily="helvetica-medium"
          textSize="lg"
          label={product.productName}
          className={styles['product-name']}
        />
        <Typography
          Tag="h3"
          fontFamily="helvetica-regular"
          textSize="md"
          label={product.designer}
          className={styles['designer']}
        />
      </div>
    </div>
  );
};
