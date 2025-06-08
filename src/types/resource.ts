export type ResourceTag = {
  _id: string;
  title: string;
};

export type Resource = {
  _id: string;
  title: string;
  tag: ResourceTag[];
  order: number;
  mainImage?: any;
  url?: string;
  description?: string;
};
