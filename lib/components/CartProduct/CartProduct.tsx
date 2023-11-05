import { Button, ImageWrapper, Price, Typography } from '../../components';

import styles from './Cartproduct.module.css';
import { CartProductProps } from './types';

export function CartProduct({ children, product, updateCart }: CartProductProps): JSX.Element {
  return (
    <section className={styles['container-cart-product']}>
      <ImageWrapper typeImage="plp">{children}</ImageWrapper>
      <div className={styles['container-details']}>
        <div className={styles['container-product-name']}>
          <Typography label={product.titleProduct} fontFamily="helvetica-medium" textSize="lg" />
          <Price price={product.details.price?.amount || 0} textSize="lg" />
        </div>
        <div className={styles['container-product-quantity']}>
          <Button
            type="outlined"
            label="-"
            fontFamily="helvetica-regular"
            textSize="md"
            callback={(): void =>
              updateCart({
                mode: 'add',
                idLineItems: product.idLineItems,
              })
            }
          />
          <Typography label={product.quantity} fontFamily="helvetica-regular" textSize="md" />
          <Button
            type="outlined"
            label="+"
            fontFamily="helvetica-regular"
            textSize="md"
            callback={(): void =>
              updateCart({
                mode: 'remove',
                idLineItems: product.idLineItems,
              })
            }
          />
        </div>
        {/* <Typography
          label={product.designerName}
          fontFamily="helvetica-regular"
          textSize="sm"
        /> */}
        <Button
          className={styles['button-remove']}
          type="outlined"
          typographyType="selected"
          label="Remove"
          fontFamily="helvetica-light"
          textSize="sm"
          callback={(): void =>
            updateCart({
              mode: 'removeAll',
              idLineItems: product.idLineItems,
            })
          }
        />
      </div>
    </section>
  );
}
