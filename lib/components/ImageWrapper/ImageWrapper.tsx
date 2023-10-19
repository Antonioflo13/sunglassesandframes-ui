import { ImageWrapperProps } from '.';

export const ImageWrapper = ({ children, typeImage }: ImageWrapperProps): JSX.Element => {
  return (
    <div className={`image-wrapper ${typeImage}`}>
      {children}
    </div>
  );
};
