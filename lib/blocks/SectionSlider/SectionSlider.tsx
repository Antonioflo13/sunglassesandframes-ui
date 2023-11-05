import { ImageWrapper } from '../../components/ImageWrapper';
import { Typography } from '../../components/Typography';

import styles from './SectionSlider.module.css';
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
          <div className={styles['container-item']} key={item.id}>
            <ImageWrapper typeImage="image-secondary">
              <img className={styles['image']} src={item.src} alt={item.alt} />
            </ImageWrapper>
            <Typography
              Tag="h3"
              className={styles['title-item']}
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
