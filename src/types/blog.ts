export type Blog = {
  title: string;
  desc: string;
  logo?: string;
  tags?: string[];
  date: number;
};

export type AllBlogResponse = {
  total: number;
  data: Blog[];
};
