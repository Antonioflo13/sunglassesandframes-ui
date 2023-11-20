import { Typography } from '../../components/Typography';

import styles from './AnnouncementBar.module.css';

export interface AnnouncementBarProps {
  label: string;
  /**
   *  Extend class name component
   */
  className?: string;
}

export const AnnouncementBar = ({ label, className, ...props }: AnnouncementBarProps): JSX.Element => {
  return (
    <div className={`${styles['announcement-bar']} ${className}`} {...props}>
      <Typography label={label} fontFamily="helvetica-regular" textSize="sm" />
    </div>
  );
};
