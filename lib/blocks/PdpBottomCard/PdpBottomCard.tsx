import './PdpBottomCard.css';

import { Button, Price, Typography } from '../../components';

import { PdpBottomCardProps } from './types';

export const PdpBottomCard = ({ product }: PdpBottomCardProps): JSX.Element => {
  return (
    <section id="bottom-card" className="container-pdp-bottom-card">
      <div className="pdp-bottom-card-item">
        <Typography label={product.name} fontFamily="helvetica-medium" textSize="xl" />

        <div className="container-pdp-bottom-card-price">
          {product.discountPrice && (
            <Price price={product.discountPrice} textSize="lg" discount={true} />
          )}
          <Price price={product.price.amount} textSize="lg" />
        </div>
      </div>
      <div className="pdp-bottom-card-item">
        <Typography label={product.vendor} fontFamily="helvetica-regular" textSize="lg" />
        <div className="container-available-product">
          {product.totalInventory === 0 && <div className="not-available" />}
          <Typography label={`${product.totalInventory} in stock`} fontFamily="helvetica-regular" />
        </div>
      </div>
      <Button label="BUTTONS" fontFamily="artegra-bold" />
    </section>
  );
};