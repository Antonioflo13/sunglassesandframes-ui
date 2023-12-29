import { SearchIcons } from '@blocks/Search';

export type SearchInputProps = {
    searchIcons: SearchIcons;
    callBackSearch: (() => void) | undefined;
    callBackCloseSearch:(() => void) | undefined;
}