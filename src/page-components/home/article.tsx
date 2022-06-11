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
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Image from "next/image";

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
            {[1, 2, 3, 4].map((each, index) => {
              //   const date = new Date(each.date);
              return (
                <CustomListItem disablePadding key={index}>
                  <Box display="flex" alignItems="center">
                    <ListItemIcon>
                      <Image alt="aa" src={"/assets/images/github.png"} height="20" width="20" />
                      {/* <ListImage src={each.logo} /> */}
                    </ListItemIcon>
                    <Typography sx={{ fontSize: "1rem" }}>
                      Mongodb memory server database
                    </Typography>
                  </Box>
                  {/* <Typography>{moment(date).format("MMM Do YY")}</Typography> */}
                </CustomListItem>
              );
            })}
          </List>
        </Box>
      ) : (
        <Typography>No blogs</Typography>
      )}
    </Box>
  );
};

export default Article;
