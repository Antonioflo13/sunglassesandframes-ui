import './ImageWrapper.css';

import { ImageWrapperProps } from '.';

export const ImageWrapper = ({ children, typeImage }: ImageWrapperProps): JSX.Element => {
  return <div className={`${typeImage}`}>{children}</div>;
};
