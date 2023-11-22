type IconWrapperProps = {
    src: string;
    size?: number;
    name?: string;
}

export const IconWrapper = ({ src, size = 18, name = 'icon' }: IconWrapperProps): JSX.Element => {

  return <img src={src} width={size} height={size} alt={name} />;

};
