import './icon.css';

export const icon = (icon: string): JSX.Element => {
  return <img className="icon" src={icon} alt="logo" />;
};
