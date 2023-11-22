import React, { useCallback } from 'react';

import { ImageWrapper } from '../../components/ImageWrapper';
import { Typography } from '../../components/Typography';

import styles from './SectionSlider.module.css';
import { SectionSliderProps, SliderItem } from './types';

export const SectionSlider = ({ title, items }: SectionSliderProps): JSX.Element => {

  const baseComponent = useCallback((item: SliderItem) =>
    <div className={styles['container-item']}>
      <ImageWrapper typeImage="image-secondary">
        {item.image}
      </ImageWrapper>
      <Typography
        Tag="h3"
        className={styles['title-item']}
        fontFamily="helvetica-medium"
        textSize="md"
        typographyType="shadow"
        label={item.title}
      />
    </div>, []);

  const component = useCallback((item: SliderItem) => {
    switch (item.itemWrapper) {
      case undefined:
        return baseComponent(item);
      default:
        return item.itemWrapper(baseComponent(item));
    }
  }, [baseComponent]);

  return (
    <section className={styles['container']}>
      <Typography
        Tag="h3"
        className={styles['title-section']}
        fontFamily="helvetica-medium"
        textSize="sm"
        label={title}
      />
      <div className={styles['container-slider']}>
        {items.map(item => (
          <React.Fragment key={item.id}>
            {component(item)}
          </React.Fragment>

        ))}
      </div>
    </section>
  );
};
