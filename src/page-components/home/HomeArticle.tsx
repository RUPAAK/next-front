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
import EachArticle from "components/EachArticle";

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

const Article = () => {
  return (
    <Box maxWidth="xs">
      <MainHeader maxWidth="xs">
        <Typography variant="h3">Articles</Typography>
        <Typography variant="h4">
          {/* <Link to="/articles" style={{ textDecoration: "underline" }}> */}
          View All
          {/* </Link> */}
        </Typography>
      </MainHeader>
      <Divider sx={{ height: "1px", background: "grey" }} />
      {[1].length > 0 ? (
        <Box maxWidth="xs">
          <List>
            <Typography>In Progress...</Typography>
            {/* {[1, 2, 3, 4].map((each, index) => {
              // return <EachArticle />;
              return <Typography>In Progress...</Typography>;
            })} */}
          </List>
        </Box>
      ) : (
        <Typography>No blogs</Typography>
      )}
    </Box>
  );
};

// export const getServerSideProps = async () => {
//   const res = await axios.get(
//     "https://editor-blog-backend.herokuapp.com/api/v1/app/blogs"
//   );

//   return {
//     props: {
//       total: 0,
//       blogs: [],
//     },
//   };
// };

export default Article;
