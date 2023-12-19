import { ReactNode } from 'react';

import { TypographyProps } from '../../components';

type DateFormat = `${number}${number}/${number}${number}/${number}${number}${number}${number}`;

interface Date extends TypographyProps {
  label: DateFormat;
}

export interface ArticleModel {
  id: string;
  /**
   * The title for the Info Box
   *
   */
  title: string;

  /**
   * The subtitle for the Info Box
   *
   */
  subtitle: string;

  /**
   * The date in the specified format "dd/mm/yyyy"
   *
   */
  date?: Date;

  wrapper?: (children: ReactNode) => JSX.Element;

  image: JSX.Element;

  type: 'article';
}

export type ArticleProps = {
  article: ArticleModel;
};
