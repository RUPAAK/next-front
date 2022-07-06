import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { AllBlogResponse, Blog } from "../types/blog";
import { Container, Box } from "@mui/material";
import DateArticle from "components/DateArticle";

type ArticleProps = {
  total: number;
  blogs: Blog[];
};

const Article = ({ total, blogs }: ArticleProps) => {
  return (
    <Box maxWidth="xs">
      {blogs.length > 0 &&
        blogs.map((blog, index) => <DateArticle key={index} date="2020" blogs={blogs} />)}
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data }: { data: AllBlogResponse | null } = await axios.get(
    "https://editor-blog-backend.herokuapp.com/api/v1/app/blogs"
  );
  if (!data) {
    console.log("hit");
    return {
      props: {
        total: 0,
        blogs: [],
      },
    };
  }
  return {
    props: {
      total: data.total,
      blogs: data.data,
    },
  };

  // return {
  //   props: {},
  // };
};

export default Article;
