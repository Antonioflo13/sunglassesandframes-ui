import { useCallback, useEffect, useState } from 'react';
import { Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { PdpImage, PdpMobileBuy } from '../../blocks';

import { PdpMobileProps } from './types';

import 'swiper/css';

export const PdpMobile = ({
  products,
  initialSlide,
  callback,
  pdpBottomCardButtonLabel,
  pdpBottomCardCallback,
}: PdpMobileProps): JSX.Element => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [bottomCardHeight, setBottomCardHeight] = useState<number>(0);
  const [imagesSwiperHeight, setImagesSwiperHeight] = useState<number>(0);

  useEffect(() => {
    setHeaderHeight(document.querySelector('nav')?.clientHeight ?? 0);
    setBottomCardHeight(document.getElementById('bottom-card')?.clientHeight ?? 0);

    setImagesSwiperHeight(headerHeight + bottomCardHeight);
  }, [bottomCardHeight, headerHeight]);

  const memoizedCallback = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (swiper: any): void => callback(swiper.activeIndex),
    [callback],
  );

  return (
    <Swiper
      modules={[Virtual]}
      onSlideChange={memoizedCallback}
      initialSlide={initialSlide}
      virtual
    >
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <Swiper
            style={{ height: `calc(100dvh - ${imagesSwiperHeight}px)` }}
            pagination={true}
            direction={'vertical'}
            loop={true}
            modules={[Pagination]}
          >
            {product.images.map(image => (
              <SwiperSlide key={image.id}>
                <PdpImage>{image.image}</PdpImage>
              </SwiperSlide>
            ))}
          </Swiper>
          <PdpMobileBuy
            product={product}
            callback={pdpBottomCardCallback}
            buttonLabel={pdpBottomCardButtonLabel}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
