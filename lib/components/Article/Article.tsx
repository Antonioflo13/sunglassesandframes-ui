import { ImageWrapper, Typography } from '../../components';

import styles from './Article.module.css';
import { ArticleProps } from './types';

export const Article = ({ article }: ArticleProps): JSX.Element => {
  return (
    <div className={styles['container-article']}>
      <ImageWrapper typeImage="article">{article.image}</ImageWrapper>
      <div className={styles['container-info-article']}>
        <Typography label={article.title} fontFamily="helvetica-medium" />
        <Typography label={article.subtitle} fontFamily="helvetica-regular" />
        {article.date && (
          <Typography label={article.date as unknown as string} fontFamily="helvetica-regular" />
        )}
      </div>
    </div>
  );
};
