import { Designer, Labels } from '@blocks/Search';

export type SearchResultsDesignersProps = {
  label: Labels['designer'];
  designers?: {
    items: Designer[];
    resultNumber: number;
  };
  className?: string;
};
