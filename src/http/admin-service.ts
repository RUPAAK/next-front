import { AllBlogResponse, BlogResponse } from "types/blog";
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
  getDetailArticle: async (id: string): Promise<BlogResponse | null> => {
    try {
      const response: BlogResponse = await api.get(`/app/blogs/${id}`);
      return response;
    } catch (error) {
      return null;
    }
  },
};
