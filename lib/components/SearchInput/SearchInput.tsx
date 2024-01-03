import { useCallback } from 'react';

import styles from './SearchInput.module.css';
import { SearchInputProps } from './types';

let timeout: NodeJS.Timeout;

export const SearchInput = ({
  searchIcons,
  onSearch,
  onCloseSearch,
}: SearchInputProps): JSX.Element => {
  const searchDebounce = useCallback(
    (input: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onSearch(input);
      }, 500);
    },
    [onSearch],
  );

  return (
    <div id="search-input-container" className={styles['container-search-input']}>
      <input
        className={styles['input-search']}
        type="text"
        onChange={(e): void => searchDebounce(e.target.value)}
      />
      <span className={styles['icon-search']}>{searchIcons.search}</span>
      <button className={styles['icon-close']} onClick={onCloseSearch}>
        {searchIcons.close}
      </button>
    </div>
  );
};
