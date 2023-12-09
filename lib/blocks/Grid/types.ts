import { ArticleModel } from '@components/Article';

import { ProductModel } from '../../components/Product';

export type GridProps = {
  items: ProductModel[] | ArticleModel[];
  type: 'products' | 'articles';
};
