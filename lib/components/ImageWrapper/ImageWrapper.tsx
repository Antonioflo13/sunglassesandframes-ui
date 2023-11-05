import styles from './ImageWrapper.module.css';
import { ImageWrapperProps } from './types';

export const ImageWrapper = ({ children, typeImage }: ImageWrapperProps): JSX.Element => {
  return <div className={styles[`${typeImage}`]}>{children}</div>;
};
