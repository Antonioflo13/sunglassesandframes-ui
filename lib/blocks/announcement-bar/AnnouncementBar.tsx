import './announcement-bar.css';
import { Typography } from '../../components/typography';

interface AnnouncementBarProps {
  label: string;
}

export const AnnouncementBar = ({ label, ...props }: AnnouncementBarProps): JSX.Element => {
  return (
    <div className="announcement-bar" {...props}>
      <Typography label={label} fontFamily="helvetica-regular" textSize="sm" />
    </div>
  );
};
