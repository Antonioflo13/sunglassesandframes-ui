import styles from './ImageWrapper.module.css';
import { ImageWrapperProps } from './types';

export const ImageWrapper = ({ children, typeImage }: ImageWrapperProps): JSX.Element => {
  return (
    <div className={`${styles['container-image-wrapper']} ${styles[`${typeImage}`]}`}>
      {children}
    </div>
  );
};
