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
import { Link } from "react-router-dom";
import moment from "moment";
import Image from "next/image";
import { GetStaticProps, GetServerSideProps, GetStaticPropsResult } from "next";
import axios from "axios";
import { Blog, StrapiArticle } from "types/blog";

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
const EachArticle: FC<{ article: StrapiArticle }> = ({ article }) => {
  return (
    <CustomListItem disablePadding>
      <Box display="flex" alignItems="center">
        <ListItemIcon>
          <img
            style={{ height: 30, width: 30, borderRadius: '50%' }}
            src={article.attributes.logo}
          />
          {/* <Image
            alt="aa"
            src={article.logo!}
            // src={blog.logo ?? "/assets/images/github.png"}
            height="25"
            width="25"
          /> */}
          {/* <ListImage src={each.logo} /> */}
        </ListItemIcon>
        <Typography sx={{ fontSize: "1rem" }}>
          {article.attributes.title}
        </Typography>
      </Box>
      <Typography>
        {moment(article.attributes.createdAt).format("MMM Do YY")}
      </Typography>
    </CustomListItem>
  );
};

export default EachArticle;
