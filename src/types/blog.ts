export type Blog = {
  title: string;
  desc: string;
  logo?: string;
  tags?: string[];
  date: number;
  createdAt: string;
};

export type AllBlogResponse = {
  total: number;
  data: Blog[];
};
