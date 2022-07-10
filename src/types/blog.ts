export type Blog = {
  id: string;
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

export type BlogResponse = {
  data: Blog;
};
