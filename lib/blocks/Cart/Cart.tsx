
import { Button, CartProduct } from '../../components';
import { CartSummaryDesktop } from '../CartSummaryDesktop';
import { CartSummaryMobile } from '../CartSummaryMobile';

import styles from './Cart.module.css';
import { CartProps } from './types';

export const Cart = ({
  products,
  updateCart,
  icons,
  totalPrice,
  goToCheckout,
  buttonLabel,
  className,
}: CartProps): JSX.Element => {
  return (
    <section className={`${styles['container-cart']} ${className ? className : ''}`}>
      <Button
        className={styles['cart-mobile']}
        label={buttonLabel}
        fontFamily="artegra-bold"
        callback={goToCheckout}
      />
      <div className={styles['container-product-summary']}>
        <div className={styles['container-product']}>
          {products.map((product, idx) => (
            <CartProduct key={idx} product={product} updateCart={updateCart} />
          ))}
        </div>
        <CartSummaryMobile
          className={styles['cart-mobile']}
          icons={icons}
          totalPrice={totalPrice}
        />
        <CartSummaryDesktop
          className={styles['cart-desktop']}
          icons={icons}
          totalPrice={totalPrice}
          buttonLabel={buttonLabel}
          goToCheckout={goToCheckout}
        />
      </div>
      <Button
        className={styles['cart-mobile']}
        label={buttonLabel}
        fontFamily="artegra-bold"
        callback={goToCheckout}
      />
    </section>
  );
};
