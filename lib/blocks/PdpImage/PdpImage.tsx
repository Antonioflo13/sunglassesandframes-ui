import './PdpImage.css';

import { ImageWrapper } from '../../components/ImageWrapper';

import { PdpImageProps } from './types';

export const PdpImage = ({ children }: PdpImageProps): JSX.Element => {
  return (
    <section className="container-pdp-image">
      <ImageWrapper typeImage="pdp">{children}</ImageWrapper>
    </section>
  );
};
