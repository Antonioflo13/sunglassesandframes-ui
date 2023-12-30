import { Designer, Labels } from '@blocks/Search';

export type SearchResultsDesignersProps = {
    designers: Designer[];
    isMobileView: boolean;
    label: Labels['designer'];
}