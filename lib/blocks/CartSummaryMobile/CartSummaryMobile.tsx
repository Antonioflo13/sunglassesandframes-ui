import { ImageWrapper, Price, Typography } from '../../components';

import styles from './CartSummaryMobile.module.css';
import { CartSummaryMobileProps } from './types';

export const CartSummaryMobile = ({
  icons,
  totalPrice,
  className,
}: CartSummaryMobileProps): JSX.Element => {
  return (
    <>
      <div className={`${styles['containter-cart-summary-mobile']} ${className ? className : ''}`}>
        <hr />
        <div className={styles['container-icons']}>
          {icons.map((icon, idx) => (
            <div className={styles['container-icon']} key={idx}>
              <ImageWrapper>{icon.icon}</ImageWrapper>
              <Typography label={icon.label} fontFamily="helvetica-regular" textSize="sm" />
            </div>
          ))}
        </div>
        <div>
          <Typography label="TOTAL" fontFamily="helvetica-medium" textSize="sm" />
          <Price price={totalPrice.amount || 0} textSize="lg" />
        </div>
        <div>
          <Typography label="SHIPPING" fontFamily="helvetica-medium" textSize="sm" />
          <Typography label="Calculated at checkout" fontFamily="helvetica-regular" textSize="sm" />
        </div>
      </div>
    </>
  );
};
