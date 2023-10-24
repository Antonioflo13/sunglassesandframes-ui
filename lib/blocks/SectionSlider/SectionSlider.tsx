import './SectionSlider.css';
import { ImageWrapper } from '@components/ImageWrapper';
import { Typography } from '@components/Typography';

import { Slider } from '.';

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
   * slider
   */
  slider: Slider[];
}

export const SectionSlider = ({ title, slider }: SectionSliderProps): JSX.Element => {
  return (
    <section className='container'>
      <Typography labelTag="h1" className='title-section' fontFamily="helvetica-medium" textSize="sm" label={title} />
      <div className='container-slider'>
        {slider.map(item => (
          <div className='container-image' key={item.id}>
            <ImageWrapper typeImage='image-secondary'>
              <img className='image' src={item.src} alt={item.alt} />
            </ImageWrapper>
            <Typography labelTag="h1" className='title-slider' fontFamily="helvetica-medium" textSize="md" label={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
};
