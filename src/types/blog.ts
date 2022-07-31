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

export type CategoryAttrs = {
  title: string;
  slug: string;
  createdAt: string;
};

export type Category = {
  id: number;
  attributes: CategoryAttrs;
};

export type StrapiAttrs = {
  title: string;
  body: string;
  tags: string;
  logo: string;
  slug: string;
  createdAt: string;
  category: Category;
};

export type StrapiArticle = {
  id: string;
  attributes: StrapiAttrs;
};

export interface DataResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
