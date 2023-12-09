import { SwiperOptions } from 'swiper/types';

import { DesignerSliderItemModel, ProductModel, TypographyProps } from '../../components';

export type SliderProps = {
  /**
   * The title for the Slider
   *
   */
  title?: TypographyProps;

  slidesPerView: SwiperOptions['slidesPerView'];

  spaceBetween?: SwiperOptions['spaceBetween'];

  loop?: SwiperOptions['loop'];

  breakpoints?: SwiperOptions['breakpoints'];

  items: ProductModel[] | DesignerSliderItemModel[];
};
