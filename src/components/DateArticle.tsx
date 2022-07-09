import { Box, Divider, Typography } from "@mui/material";
import Article from "page-components/home/HomeArticle";
import React, { FC } from "react";
import { Blog } from "types/blog";
import EachArticle from "./EachArticle";

type DateArticleProps = {
  date: string;
  blogs: Blog[];
};

const DateArticle: FC<DateArticleProps> = ({ date, blogs }) => {
  return (
    <Box maxWidth="xs">
   

      {blogs.map((blog, index) => (
        <EachArticle blog={blog} key={index} />
      ))}
    </Box>
  );
};

export default DateArticle;
