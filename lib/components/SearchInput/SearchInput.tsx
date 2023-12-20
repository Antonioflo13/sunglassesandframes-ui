
import { IconWrapper } from '@components/IconWrapper';

import styles from './SearchInput.module.css';

import { SearchInputProps } from '.';

export const SearchInput = ({ searchIcons }: SearchInputProps ): JSX.Element => {

  return (
    <div className={styles['container']}>
      <input className={styles['input-search']} type="text" />
      <IconWrapper className={styles['icon-search']} size={15} src={searchIcons.search} alt='search' />
      <button>
        <IconWrapper className={styles['icon-close']} size={15} src={searchIcons.close} alt='close' />
      </button>
    </div>
  );
};
