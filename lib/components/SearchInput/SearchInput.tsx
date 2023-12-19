
import { IconWrapper } from '@components/IconWrapper';
import { FormEvent, useState } from 'react';

import styles from './SearchInput.module.css';

export const SearchInput = (): JSX.Element => {
  const searchIcon = 'lib/assets/Icons/search.svg';
  const closeIcon = 'lib/assets/Icons/close.svg';

  const [value, setValue] = useState('');

  const onChange = (e: FormEvent<HTMLInputElement>): void =>
    setValue(e.currentTarget.value);

  const cleanValue = (): void =>
    setValue('');

  return (
    <div className={styles['container']}>
      <input value={value} onChange={onChange} className={styles['input-search']} type="text" />
      <IconWrapper className={styles['icon-search']} size={15} src={searchIcon} alt='search' />
      <button onClick={cleanValue}>
        <IconWrapper className={styles['icon-close']} size={15} src={closeIcon} alt='close' />
      </button>
    </div>
  );
};
