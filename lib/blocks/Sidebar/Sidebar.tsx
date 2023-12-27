import { motion } from 'framer-motion';
import { useCallback } from 'react';

import { Typography } from '../../components';

import styles from './Sidebar.module.css';
import { MenuItem, SidebarProps, ViewAll } from './types';

export const Sidebar = ({ menuItems, viewAllLabel, className }: SidebarProps): JSX.Element => {
  const sidebarVariants = {
    hidden: { x: '-100%',
      transition: { type: 'tween' } },
    shown: {
      x: '0',
      transition: {
        type: 'tween',
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const component = useCallback((item: MenuItem | ViewAll) => {
    switch (item.wrapper) {
      case undefined:
        switch (item.type) {
          case 'view-all':
            return (
              <li onClick={item.callback}>
                <Typography label={item.label} fontFamily="helvetica-medium" />
              </li>
            );
          default:
            return (
              <li onClick={item.callback}>
                <Typography label={item.label} fontFamily="helvetica-light" />
              </li>
            );
        }
      default:
        return item.wrapper(
          <li onClick={item.callback}>
            <Typography label={item.label} fontFamily="helvetica-light" />
          </li>,
        );
    }
  }, []);

  return (
    <motion.section
      className={`${styles['sidebar']} ${className}`}
      variants={sidebarVariants}
      initial={'hidden'}
      animate={'shown'}
      exit={'hidden'}
    >
      <ul className={styles['sidebar-menu-items-container']}>
        {menuItems.map((menuItem, idx) => (
          <li key={idx}>
            <Typography label={menuItem.label} fontFamily="helvetica-medium" />
            {menuItem.subItems && (
              <ul className={styles['sidebar-sub-items-container']}>
                {[...menuItem.subItems].splice(0, 3).map((subItem, idx) => (
                  <li key={idx}>{component(subItem)}</li>
                ))}
                {menuItem.subItems.length > 2 && component(viewAllLabel)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
