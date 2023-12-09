import { ImageWrapper } from '../ImageWrapper';
import { Typography } from '../Typography';

import styles from './DesignerSliderItem.module.css';
import { DesignerSliderItemProps } from './types';

export const DesignerSliderItem = ({ item }: DesignerSliderItemProps): JSX.Element => {
  return (
    <div className={styles['container-item']} onClick={item.callback ?? item.callback}>
      <ImageWrapper typeImage="image-secondary">{item.image}</ImageWrapper>
      {item.title && (
        <Typography
          className={styles['title-item']}
          fontFamily={item.title.fontFamily}
          textSize={item.title.textSize}
          typographyType={item.title.typographyType}
          label={item.title?.label}
        />
      )}
    </div>
  );
};
