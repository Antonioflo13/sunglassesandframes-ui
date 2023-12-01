type IconWrapperProps = {
    src: string;
    size?: number;
    alt?: string;
}

export const IconWrapper = ({ src, size = 18, alt = 'icon' }: IconWrapperProps): JSX.Element => {

  return <img src={src} width={size} height={size} alt={alt} />;

};
