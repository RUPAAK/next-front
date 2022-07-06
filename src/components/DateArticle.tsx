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
      <Typography variant="h4">{date}</Typography>
      <Divider />

      {blogs.map((blog) => (
        <EachArticle blog={blog} />
      ))}
    </Box>
  );
};

export default DateArticle;