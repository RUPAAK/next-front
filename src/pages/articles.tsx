import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { AllBlogResponse, Blog } from "../types/blog";
import { Container, Box, Divider, Typography } from "@mui/material";
import DateArticle from "components/DateArticle";
import { adminSerice } from "http/admin-service";

export type ArticleProps = {
  total: number;
  blogs: Blog[];
};

const Article = ({ total, blogs }: ArticleProps) => {
  return (
    <Box maxWidth="xs">
      <Typography variant="h4">2022</Typography>
      <Divider />
      {blogs.length > 0 &&
        blogs.map((blog, index) => (
          <DateArticle key={index} date="2020" blogs={blogs} />
        ))}
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await adminSerice.getAllArticles();

  if (!blogs) {
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
      total: blogs.total,
      blogs: blogs.data,
    },
  };
};

export default Article;
