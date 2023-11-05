import { Typography } from '../../components/Typography';

import styles from './AnnouncementBar.module.css';

export interface AnnouncementBarProps {
  label: string;
}

export const AnnouncementBar = ({ label, ...props }: AnnouncementBarProps): JSX.Element => {
  return (
    <div className={styles['announcement-bar']} {...props}>
      <Typography label={label} fontFamily="helvetica-regular" textSize="sm" />
    </div>
  );
};
