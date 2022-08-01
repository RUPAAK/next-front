import { Box, Divider, Typography } from "@mui/material";
import Article from "page-components/home/HomeArticle";
import React, { FC } from "react";
import { Blog, StrapiArticle } from "types/blog";
import EachArticle from "./EachArticle";

type DateArticleProps = {
  date: string;
  articles: StrapiArticle[];
};

const DateArticle: FC<DateArticleProps> = ({ date, articles }) => {
  return (
    <Box maxWidth="xs">
   

      {articles.map((article, index) => (
        <EachArticle article={article} key={index} />
      ))}
    </Box>
  );
};

export default DateArticle;
