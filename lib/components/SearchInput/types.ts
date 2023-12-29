import { CallBacks, SearchIcons } from '@blocks/Search';

export type SearchInputProps = {
    searchIcons: SearchIcons;
    onSearch: CallBacks['onSearch'];
    onCloseSearch: CallBacks['onCloseSearch'];
}