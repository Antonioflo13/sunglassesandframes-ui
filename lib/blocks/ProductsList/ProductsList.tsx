import './ProductsList.css';

import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import { Price } from '../../components/Price/Price';
import { Typography } from '../../components/Typography/Typography';

import { ProductsListProps } from './types';

export const ProductsList = ({ title, products }: ProductsListProps): JSX.Element => {
  return (
    <section className="container-plp">
      {title && (
        <Typography
          Tag="h1"
          fontFamily="helvetica-medium"
          textSize="sm"
          label={title}
          className="title"
        />
      )}

      <div className="container-products">
        {products.map(product => (
          <div className="container-product" key={product.id}>
            <ImageWrapper typeImage="plp">
              <img src={product.image.src} alt={product.image.alt} />
            </ImageWrapper>
            <Price className="price" price={product.price} />
            <Typography
              Tag="h1"
              fontFamily="helvetica-medium"
              textSize="lg"
              label={product.productName}
              className="product-name"
            />
            <Typography
              Tag="h1"
              fontFamily="helvetica-regular"
              textSize="md"
              label={product.designer}
              className="designer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
