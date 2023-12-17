import { Button, ImageWrapper, Price, Typography } from '../../components';

import styles from './CartSummaryDesktop.module.css';
import { CartSummaryDesktopProps } from './types';

export const CartSummaryDesktop = ({
  icons,
  totalPrice,
  buttonLabel,
  goToCheckout,
  className,
}: CartSummaryDesktopProps): JSX.Element => {
  return (
    <>
      <div className={`${styles['containter-cart-summary-desktop']} ${className ? className : ''}`}>
        <Typography
          Tag="h3"
          label="CART SUMMARY"
          fontFamily="helvetica-medium"
          textSize="lg"
          className={styles['cart-summary-title']}
        />
        <div>
          <Typography label="TOTAL" fontFamily="helvetica-medium" textSize="sm" />
          <Price price={totalPrice.amount || 0} textSize="lg" />
        </div>
        <div>
          <Typography label="SHIPPING" fontFamily="helvetica-medium" textSize="sm" />
          <Typography label="Calculated at checkout" fontFamily="helvetica-regular" textSize="sm" />
        </div>
        <hr />
        <div className={styles['container-icons']}>
          {icons.map((icon, idx) => (
            <div className={styles['container-icon']} key={idx}>
              <ImageWrapper>{icon.icon}</ImageWrapper>
              <Typography label={icon.label} fontFamily="helvetica-regular" textSize="sm" />
            </div>
          ))}
        </div>
        <Button label={buttonLabel} fontFamily="artegra-bold" callback={goToCheckout} />
      </div>
    </>
  );
};
