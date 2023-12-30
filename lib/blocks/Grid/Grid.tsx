import React, { useCallback } from 'react';

import { Article, ArticleModel } from '../../components/Article';
import { Product, ProductModel } from '../../components/Product';

import styles from './Grid.module.css';
import { GridProps } from './types';

export const Grid = ({ items, type, className }: GridProps): JSX.Element => {
  const component = useCallback((item: ProductModel | ArticleModel) => {
    const findComponent
      = item.type === 'product' ? <Product product={item} /> : <Article article={item} />;
    switch (item.wrapper) {
      case undefined:
        return findComponent;
      default:
        return item.wrapper(findComponent);
    }
  }, []);

  return (
    <section
      className={`
        ${styles['grid']} 
        ${styles[`grid-${type}`]} 
        ${className ? className : ''}`}
    >
      {items.map(item => (
        <React.Fragment key={item.id}>{component(item)}</React.Fragment>
      ))}
    </section>
  );
};
