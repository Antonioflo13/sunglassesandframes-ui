type IconWrapperProps = {
    src: string;
    size?: number;
    alt?: string;
    className?: string;
}

export const IconWrapper = ({ src, size = 18, alt = 'icon', className = '' }: IconWrapperProps): JSX.Element => {

  return <img className={className} src={src} width={size} height={size} alt={alt} />;

};
