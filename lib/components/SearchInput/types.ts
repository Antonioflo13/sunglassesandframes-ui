import { CallBacks, Icons } from '@blocks/Search';

export type SearchInputProps = {
    searchIcons: Icons;
    onSearch: CallBacks['onSearch'];
    onCloseSearch: CallBacks['onCloseSearch'];
}