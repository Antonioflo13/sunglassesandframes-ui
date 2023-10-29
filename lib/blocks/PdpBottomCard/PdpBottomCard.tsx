import './PdpBottomCard.css';

import { Button, Price, Typography } from '../../components';

import { PdpBottomCardProps } from './types';

export const PdpBottomCard = ({ product }: PdpBottomCardProps): JSX.Element => {
  return (
    <section className="container-pdp-bottom-card">
      <div className="pdp-bottom-card-item">
        <Typography label={product.name} fontFamily="helvetica-medium" textSize="xl" />
        <Typography label={product.designer} fontFamily="helvetica-regular" textSize="lg" />
        <Price price={product.price} />
      </div>
      <div className="pdp-bottom-card-item">
        <Typography label={product.designer} fontFamily="helvetica-regular" textSize="lg" />
        <div className="container-available-product">
          {product.availableNumber === 0 && <div className="not-available" />}
          <Typography
            label={`${product.availableNumber} in stock`}
            fontFamily="helvetica-regular"
          />
        </div>
      </div>
      <Button label="BUTTONS" fontFamily="artegra-bold" />
    </section>
  );
};
