import axios from "axios";
import {
  AllBlogResponse,
  BlogResponse,
  DataResponse,
  StrapiArticle,
  StrapiAttrs,
} from "types/blog";
import { api } from "./api";

export const adminSerice = {
  getAllArticles: async (limit?: number): Promise<AllBlogResponse | null> => {
    try {
      if (limit) {
        const response: AllBlogResponse = await api.get("/app/blogs?limit");
        return response;
      } else {
        const response: AllBlogResponse = await api.get("/app/blogs");
        return response;
      }
    } catch (error) {
      return null;
    }
  },

  getStripe: async (
    config: string
  ): Promise<DataResponse<StrapiArticle> | null> => {
    try {
      const response: DataResponse<StrapiArticle> = await api.get(
        `/articles?${config}&populate=*`
      );
      return response;
    } catch (error) {
      return null;
    }
  },

  getSingleStripe: async ({
    slug,
    config,
  }: {
    slug: Pick<StrapiAttrs, "slug">;
    config: string;
  }): Promise<DataResponse<StrapiArticle> | null> => {
    try {
      const response: DataResponse<StrapiArticle> = await api.get(
        `/articles?filters[slug][$eq]=${slug}`
      );
      return response;
    } catch (error) {
      return null;
    }
  },

  getDetailArticle: async (id: string): Promise<BlogResponse | null> => {
    try {
      const response: BlogResponse = await api.get(`/app/blogs/${id}`);
      return response;
    } catch (error) {
      return null;
    }
  },
};
