import { ImageWrapper } from '../../../components';

import styles from './PdpImages.module.css';
import { PdpImagesProps } from './types';

export const PdpImages = ({ images }: PdpImagesProps): JSX.Element => {
  return (
    <section className={styles['pdp-images-container']}>
      {images.map(image => (
        <ImageWrapper key={image.id} typeImage="pdp">
          {image.image}
        </ImageWrapper>
      ))}
    </section>
  );
};
