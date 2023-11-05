export enum HeaderItemTypes {
  Img = 'img',
  Icon = 'icon',
  Label = 'label',
}

export type HeaderItems = {
  type: HeaderItemTypes.Img | HeaderItemTypes.Icon | HeaderItemTypes.Label;
  label?: string;
  callback?: () => void;
};
