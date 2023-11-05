import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import { Price } from '../../components/Price/Price';
import { Typography } from '../../components/Typography/Typography';

import styles from './ProductsList.module.css';
import { ProductsListProps } from './types';

export const ProductsList = ({ title, products }: ProductsListProps): JSX.Element => {
  return (
    <section className={styles['container-plp']}>
      {title && (
        <Typography
          Tag="h1"
          fontFamily="helvetica-medium"
          textSize="sm"
          label={title}
          className={styles['title']}
        />
      )}

      <div className={styles['container-products']}>
        {products.map(product => (
          <div className={styles['container-product']} key={product.id}>
            <ImageWrapper typeImage="plp">
              <img src={product.image.src} alt={product.image.alt} />
            </ImageWrapper>
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
        ))}
      </div>
    </section>
  );
};
