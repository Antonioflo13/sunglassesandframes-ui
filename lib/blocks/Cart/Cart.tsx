import { Button, CartProduct, ImageWrapper, Price, Typography } from '../../components';

import styles from './Cart.module.css';
import { CartProps } from './types';

export const Cart = ({
  products,
  updateCart,
  icons,
  totalPrice,
  goToCheckout,
  buttonLabel
}: CartProps): JSX.Element => {
  return (
    <section className={styles['container-cart']}>
      <Button label={buttonLabel} fontFamily="artegra-bold" callback={goToCheckout} />
      {products.map((product, idx) => (
        <CartProduct key={idx} product={product} updateCart={updateCart}/>
      ))}
      <hr />
      <div className={styles['containter-info']}>
        <div className={styles['container-icons']}>
          {icons.map((icon, idx) => (
            <div className={styles['container-icon']} key={idx}>
              <ImageWrapper>{icon}</ImageWrapper>
              <Typography label="text" fontFamily="helvetica-regular" textSize="sm" />
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
      <Button label={buttonLabel} fontFamily="artegra-bold" callback={goToCheckout} />
    </section>
  );
};
