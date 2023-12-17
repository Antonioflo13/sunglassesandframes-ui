
import { IconWrapper } from '@components/IconWrapper';

import styles from './SearchInput.module.css';

export const SearchInput = (): JSX.Element => {

  const searchIcon = 'lib/assets/Icons/search.svg';
  const closeIcon = 'lib/assets/Icons/close.svg';

  return (
    <div className={styles['container-searchInput']}>
      <input className={styles['input-search']} type="text" />
      <IconWrapper className={styles['icon-search']} size={15} src={searchIcon} alt='search' />
      <IconWrapper className={styles['icon-close']} size={15} src={closeIcon} alt='close' />
    </div>
  );
};
