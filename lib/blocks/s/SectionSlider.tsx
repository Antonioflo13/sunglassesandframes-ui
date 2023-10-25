import './SectionSlider.css';

import { ImageWrapper } from '../../components/i';
import { Typography } from '../../components/t';

import { SliderItem } from './types';

/**
 * Props for a SectionSlider component.
 * @param {SectionSliderProps} props
 */

export type SectionSliderProps = {
  /**
   * title
   */
  title: string;

  /**
   * items
   */
  items: SliderItem[];
};

export const SectionSlider = ({ title, items }: SectionSliderProps): JSX.Element => {
  return (
    <section className="container">
      <Typography
        Tag="h1"
        className="title-section"
        fontFamily="helvetica-medium"
        textSize="sm"
        label={title}
      />
      <div className="container-slider">
        {items.map(item => (
          <div className="container-item" key={item.id}>
            <ImageWrapper typeImage="image-secondary">
              <img className="image" src={item.src} alt={item.alt} />
            </ImageWrapper>
            <Typography
              Tag="h1"
              className="title-item"
              fontFamily="helvetica-medium"
              textSize="md"
              typographyType="shadow"
              label={item.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
