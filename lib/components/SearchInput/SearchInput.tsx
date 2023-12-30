import styles from './SearchInput.module.css';
import { SearchInputProps } from './types';

export const SearchInput = ({
  searchIcons,
  onSearch,
  onCloseSearch,
}: SearchInputProps): JSX.Element => {
  return (
    <div className={styles['container-search-input']}>
      <input className={styles['input-search']} type="text" onChange={onSearch} />
      <span className={styles['icon-search']}>{searchIcons.search}</span>
      <button className={styles['icon-close']} onClick={onCloseSearch}>
        {searchIcons.close}
      </button>
    </div>
  );
};
