import { useEffect, useRef } from 'react';
import { Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { PdpBottomCard, PdpImage } from '../../blocks';

import { PdpMobileProps } from './types';

import 'swiper/css';

export const PdpMobile = ({
  children,
  products,
  initialSlide,
  callback,
}: PdpMobileProps): JSX.Element => {
  const imagesSwiperHeight = useRef<number | undefined>(0);

  useEffect(() => {
    const headerHeight = document.querySelector('header')?.clientHeight;
    const bottomCardHeight = document.getElementById('bottom-card')?.clientHeight;
    const windowHeight = window.innerHeight;

    console.log(headerHeight, bottomCardHeight, windowHeight);

    if (windowHeight && headerHeight && bottomCardHeight) {
      imagesSwiperHeight.current = headerHeight + bottomCardHeight - windowHeight;
      console.log(imagesSwiperHeight.current);
    }
  }, []);

  return (
    <Swiper
      modules={[Virtual]}
      onSlideChange={(swiper): void => callback(swiper.activeIndex)}
      initialSlide={initialSlide}
      virtual
    >
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <>
            <Swiper
              style={{ height: `${imagesSwiperHeight.current || 500}px` }}
              pagination={true}
              direction={'vertical'}
              loop={true}
              modules={[Pagination]}
            >
              {product.images.map(image => (
                <SwiperSlide key={image.id}>
                  <PdpImage>{children}</PdpImage>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
          <PdpBottomCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
