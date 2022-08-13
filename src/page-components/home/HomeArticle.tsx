import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  experimentalStyled,
} from "@mui/material";
import React, { FC, useEffect } from "react";
import moment from "moment";
import Image from "next/image";
import { GetStaticProps, GetServerSideProps, GetStaticPropsResult } from "next";
import axios from "axios";
import EachArticle from "components/EachArticle";
import { adminSerice } from "http/admin-service";
import { ArticleProps } from "pages/articles";
import { AllBlogResponse, Blog, StrapiArticle } from "types/blog";
import Link from "next/link";

const MainHeader = experimentalStyled(Box)(
  ({ theme }) => `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      `
);
const ListImage = experimentalStyled("img")(
  ({ theme }) => `
       height: 35px;
       width: 35px;
       border-radius: 50%;
        `
);

const CustomListItem = experimentalStyled(ListItem)(
  ({ theme }) => `
      display: flex;
      justify-content: space-between;
      padding: 0.3rem 0;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.3s;
      &:hover{
          background: #EAD9D9;
      }
      `
);

// interface HomeProps {
//   host: string;
// }

const Article: FC<{ articles: StrapiArticle[] }> = ({ articles }) => {
  return (
    <Box maxWidth="xs">
      <MainHeader maxWidth="xs">
        <Typography variant="h3">Latest Articles</Typography>
        <Typography variant="h4">
          <Link href="/articles" style={{ textDecoration: "underline" }}>
            <a>View All</a>
          </Link>
        </Typography>
      </MainHeader>
      <Divider sx={{ height: "1px", background: "grey" }} />
      {articles.length > 0 ? (
        <Box maxWidth="xs">
          <List>
            {articles.map((article, index) => (
              <Link href={`/articles/${article.attributes.slug}`} key={index}>
                <a>
                  <EachArticle article={article} />
                </a>
              </Link>
            ))}
          </List>
        </Box>
      ) : (
        <Typography>No blogs</Typography>
      )}
    </Box>
  );
};

export default Article;
