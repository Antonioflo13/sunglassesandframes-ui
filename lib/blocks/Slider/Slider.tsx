import { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DesignerSliderItem, DesignerSliderItemModel } from '../../components/DesignerSliderItem';
import { Product, ProductModel } from '../../components/Product';
import { Typography } from '../../components/Typography';

import styles from './Slider.module.css';
import { SliderProps } from './types';

import 'swiper/css';

export const Slider = ({
  items,
  title,
  slidesPerView,
  loop = true,
  spaceBetween,
  breakpoints,
}: SliderProps): JSX.Element => {
  const component = useCallback((item: ProductModel | DesignerSliderItemModel) => {
    const findComponent
      = item.type === 'product' ? <Product product={item} /> : <DesignerSliderItem item={item} />;
    switch (item.wrapper) {
      case undefined:
        return findComponent;
      default:
        return item.wrapper(findComponent);
    }
  }, []);
  return (
    <section className={styles['container-carosuel']}>
      {title && (
        <div className={styles['container-title']}>
          <Typography
            label={title.label}
            fontFamily={title.fontFamily}
            textSize={title.textSize}
            className={styles['title']}
          />
        </div>
      )}
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        loopPreventsSliding={true}
        grabCursor={true}
        breakpoints={breakpoints}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>{component(item)}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
