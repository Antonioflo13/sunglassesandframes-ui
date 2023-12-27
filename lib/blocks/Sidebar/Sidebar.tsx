import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

import { Typography } from '../../components';

import styles from './Sidebar.module.css';
import { MenuItem, SidebarProps } from './types';

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

  const component = useCallback(
    (item: MenuItem, isViewAll: boolean) => {
      const findComponent = isViewAll ? (
        <li onClick={item.callback}>
          <Typography label={viewAllLabel} fontFamily="helvetica-medium" />
        </li>
      ) : (
        <li onClick={item.callback}>
          <Typography label={item.label} fontFamily="helvetica-light" />
        </li>
      );

      switch (item.wrapper) {
        case undefined:
          return findComponent;
        default:
          return item.wrapper(findComponent);
      }
    },
    [viewAllLabel],
  );

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
                  <React.Fragment key={idx}>{component(subItem, false)}</React.Fragment>
                ))}
                {menuItem.subItems.length > 3 && menuItem.viewAll && (
                  <React.Fragment>{component(menuItem.viewAll, true)}</React.Fragment>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
