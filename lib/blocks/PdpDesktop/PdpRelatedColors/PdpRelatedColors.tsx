import React, { useCallback } from 'react';

import { ImageWrapper } from '../../../components';

import styles from './PdpRelatedColors.module.css';
import { ImageModel, PdpRelatedColorsProps } from './types';

export const PdpRelatedColors = ({ images }: PdpRelatedColorsProps): JSX.Element => {
  const component = useCallback((item: ImageModel) => {
    const component = <ImageWrapper typeImage="related-color">{item.image}</ImageWrapper>;
    switch (item.wrapper) {
      case undefined:
        return component;
      default:
        return item.wrapper(component);
    }
  }, []);
  return (
    <section className={styles['pdp-related-colors-container']}>
      {images.map(image => (
        <React.Fragment key={image.id}>{component(image)}</React.Fragment>
      ))}
    </section>
  );
};
