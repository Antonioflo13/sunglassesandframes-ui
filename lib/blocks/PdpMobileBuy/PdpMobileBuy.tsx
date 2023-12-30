import { Button, Price, Typography } from '../../components';

import styles from './PdpMobileBuy.module.css';
import { PdpMobileBuyProps } from './types';

export const PdpMobileBuy = ({
  product,
  buttonLabel,
  callback,
}: PdpMobileBuyProps): JSX.Element => {
  return (
    <section id="bottom-card" className={styles['container-pdp-bottom-card']}>
      <div className={styles['pdp-bottom-card-item']}>
        <Typography label={product.name} fontFamily="helvetica-medium" textSize="xl" />
        <div className={styles['container-pdp-bottom-card-price']}>
          {product.discountPrice && (
            <Price price={product.discountPrice} textSize="lg" discount={true} />
          )}
          <Price price={product.price.amount} textSize="lg" />
        </div>
      </div>
      <div className={styles['pdp-bottom-card-item']}>
        <Typography label={product.vendor} fontFamily="helvetica-regular" textSize="lg" />
        <div className={styles['container-available-product']}>
          <div
            className={`
            ${styles['circle']} 
            ${product.totalInventory === 0 ? styles['not-available'] : ''}`}
          />
          <Typography label={`${product.totalInventory} in stock`} fontFamily="helvetica-regular" />
        </div>
      </div>
      <Button label={buttonLabel} fontFamily="artegra-bold" callback={callback} />
    </section>
  );
};
