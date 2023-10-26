import './ProductsPlp.css';
import { ImageWrapper } from '@components/ImageWrapper';
import { Price } from '@components/Price';
import { Typography } from '@components/Typography';

import { ProductsPlpProps } from '.';

export const ProductsPlp = ({ title, products }: ProductsPlpProps): JSX.Element => {
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

      <div className='products'>
        {products.map(product => (
          <div key={product.id}>
            <ImageWrapper typeImage="plp">
              <img src={product.image.src} alt={product.image.alt} />
            </ImageWrapper>
            <Price className="price" price={product.price} />
            <Typography
              Tag="h1"
              fontFamily="helvetica-medium"
              textSize="lg"
              label={product.productName}
              className='product-name'
            />
            <Typography
              Tag="h1"
              fontFamily="helvetica-regular"
              textSize="md"
              label={product.designer}
              className='designer'
            />
          </div>
        ))}
      </div>
    </section>
  );
};
