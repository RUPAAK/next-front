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
import { Blog } from "types/blog";

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
const EachArticle: FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <CustomListItem disablePadding>
      <Box display="flex" alignItems="center">
        <ListItemIcon>
          <Image
            alt="aa"
            src="https://imgs.search.brave.com/tkgoZ-4A3euBe8k1_NaeeqPfd10zB1csYmJgBQEZ258/rs:fit:689:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/aGRjaE9iMG4xYndy/bGZoR3F5Y2JnSGFG/RyZwaWQ9QXBp"
            // src={blog.logo ?? "/assets/images/github.png"}
            height="20"
            width="20"
          />
          {/* <ListImage src={each.logo} /> */}
        </ListItemIcon>
        <Typography sx={{ fontSize: "1rem" }}>{blog.title}</Typography>
      </Box>
      {/* <Typography>{moment(date).format("MMM Do YY")}</Typography> */}
    </CustomListItem>
  );
};

export default EachArticle;
