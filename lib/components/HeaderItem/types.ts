export enum HeaderItemTypes {
  Img = 'img',
  Icon = 'icon',
  Label = 'label',
}

export interface Img {
  type: HeaderItemTypes.Img;
  label?: string;
}

export interface Icon {
  type: HeaderItemTypes.Icon;
  label: string;
}

export interface Label {
  type: HeaderItemTypes.Label;
  label: string;
}

export type HeaderItems = Img | Icon | Label;
