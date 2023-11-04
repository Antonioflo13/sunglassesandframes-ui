import './Cart.css';

import { Button, CartProduct, ImageWrapper, Price, Typography } from '../../components';

import { CartProps } from './types';

export const Cart = ({
  children,
  products,
  updateCart,
  icons,
  totalPrice,
  goToCheckout,
}: CartProps): JSX.Element => {
  return (
    <section className="container-cart">
      <Button label="buttons" fontFamily="artegra-bold" callback={goToCheckout} />
      {products.map((product, idx) => (
        <CartProduct key={idx} product={product} updateCart={updateCart}>
          {children}
        </CartProduct>
      ))}
      <hr />
      <div className="containter-info">
        <div className="container-icons">
          {icons.map((icon, idx) => (
            <div className="container-icon" key={idx}>
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
      <Button label="buttons" fontFamily="artegra-bold" callback={goToCheckout} />
    </section>
  );
};
