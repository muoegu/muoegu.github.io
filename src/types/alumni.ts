export type AlumniTag = {
  _id: string;
  title: string;
};

export type Alumni = {
  _id: string;
  english_name: string;
  chinese_name: string;
  degree: string;
  tag: AlumniTag[];
};