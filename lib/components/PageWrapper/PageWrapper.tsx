import { motion } from 'framer-motion';

import { AnnouncementBar } from '../../blocks/AnnouncementBar';
import { Header } from '../../blocks/Header/Header';

import styles from './PageWrapper.module.css';
import { PageWrapperProps } from './types';

const PageWrapper = ({
  children,
  announcementBarProps,
  withNavbar,
  withAnnouncementBar = true,
  withFooter = true,
  withAnimation = true,
  withSpacing = true,
}: PageWrapperProps): JSX.Element => {
  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 2,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };
  return (
    <motion.div {...(withAnimation ? animationProps : {})}>
      {withAnnouncementBar && (
        <AnnouncementBar
          label={announcementBarProps.label}
          className={announcementBarProps.className}
        />
      )}
      {withNavbar && <Header {...withNavbar} />}
      <div className={withSpacing ? styles['page-content-container'] : ''}>{children}</div>
      {withFooter && <footer></footer>}
    </motion.div>
  );
};

export default PageWrapper;
