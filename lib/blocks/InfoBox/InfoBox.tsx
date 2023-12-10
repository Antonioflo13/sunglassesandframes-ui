import { Button, ImageWrapper, Typography } from '../../components';

import styles from './Infobox.module.css';
import { InfoBoxprops } from './types';

export const InfoBox = ({
  children,
  title,
  subtitle,
  description,
  date,
  button,
  className,
}: InfoBoxprops): JSX.Element => {
  return (
    <section className={`${styles['container-info-box']} ${className ? className : ''}`}>
      <ImageWrapper typeImage="image-primary">{children}</ImageWrapper>
      {title && <Typography label={title.label} fontFamily={title.fontFamily} />}
      {subtitle && <Typography label={subtitle.label} fontFamily={subtitle.fontFamily} />}
      {description && <Typography label={description.label} fontFamily={description.fontFamily} />}
      {date && <Typography label={date.label} fontFamily={date.fontFamily} />}
      {button && (
        <Button label={button.label} fontFamily={button.fontFamily} callback={button.callback} />
      )}
    </section>
  );
};
