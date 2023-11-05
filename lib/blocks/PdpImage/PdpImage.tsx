import { ImageWrapper } from '../../components/ImageWrapper';

import styles from './PdpImage.module.css';
import { PdpImageProps } from './types';

export const PdpImage = ({ children }: PdpImageProps): JSX.Element => {
  return (
    <section className={styles['container-pdp-image']}>
      <ImageWrapper typeImage="pdp">{children}</ImageWrapper>
    </section>
  );
};
