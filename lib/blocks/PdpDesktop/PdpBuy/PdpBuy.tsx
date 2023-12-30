import { Button, Price, Typography } from '../../../components';

import styles from './PdpBuy.module.css';
import { PdpBuyProps } from './types';

export const PdpBuy = ({ product, buttonLabel, callback }: PdpBuyProps): JSX.Element => {
  return (
    <section id="bottom-card" className={styles['container-pdp-buy']}>
      <Typography label={product.name} fontFamily="helvetica-medium" textSize="xl" />
      <div className={styles['container-pdp-buy-price']}>
        {product.discountPrice && (
          <Price price={product.discountPrice} textSize="lg" discount={true} />
        )}
        <Price price={product.price.amount} textSize="lg" />
      </div>
      <Typography label={product.vendor} fontFamily="helvetica-regular" textSize="lg" />
      <Button label={buttonLabel} fontFamily="artegra-bold" callback={callback} />
      <div className={styles['container-available-product']}>
        <div
          className={`
            ${styles['circle']} 
            ${product.totalInventory === 0 ? styles['not-available'] : ''}`}
        />
        <Typography label={`${product.totalInventory} in stock`} fontFamily="helvetica-regular" />
      </div>
    </section>
  );
};
