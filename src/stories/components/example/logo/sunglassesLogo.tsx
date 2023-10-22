import './sunglassesLogo.css';
import logo from '@stories/assets/example/LOGO.png';

export const sunglassesLogo = (): JSX.Element => {
  return <img className="logo" src={logo} alt="logo" />;
};
