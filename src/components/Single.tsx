import React, { FC } from "react";
import moment from "moment";
import parse from "html-react-parser";
import {
  Box,
  Button,
  Chip,
  experimentalStyled,
  Typography,
} from "@mui/material";
import { Blog, StrapiArticle } from "types/blog";
import { screenPadding } from "./Navbar";
import Link from "next/link";

const Image = experimentalStyled("img")(
  ({ theme }) => `
  width: 150px;
  border: 1px solid grey;
  border-radius: 10px;
  height: 150px;
  `
);

const IconButton = experimentalStyled(Button)(
  ({ theme }) => `
  position: absolute;
  left: 100px;
  `
);

const HeaderBox = experimentalStyled(Box)(
  ({ theme }) => `
 margin: 2rem 0;
 *{
   margin: 1rem 0;
 }
  `
);

const ContentBox = experimentalStyled(Box)(
  ({ theme }) => `
  width: 100vh;
  display:flex;
  flex-direction: column;
  margin: 1rem 0;
  word-wrap: break-word;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;

  @media (max-width: 720px) {
    width: auto;
    }

  @media (max-width: 500px) {
  line-height: 1.2rem;
    letter-spacing: 0rem;
  }

  pre{
    background: #363C46;
    color: #fff;
    font-size: 100%;
    padding: 0.5rem;
    border-radius: 8px;
  }
  code{
    background: #363C46;
    color: #fff;
    font-size: 100%;
    padding: 0.5rem;
    border-radius: 8px;
  }
  blockquote{
    width:100%;
    margin:50px auto;
    font-style:italic;
    color: #555555;
    padding: 0 1rem;
    border-left:4px solid #78C0A8 ;
    line-height:1.4;
    position: relative;
    background:#EDEDED;
  }
  img{
    // max-width: 100%;
    // position: relative;
    // left: 50%;
    // transform: translate(-50%, 0%);
    @media (max-width: 500px) {
      max-width: 60%;
    }
  }
`
);

const Single: FC<{ article: StrapiArticle }> = ({ article }) => {
  return (
    <>
      <Link href="/">
        <a>
          <IconButton variant="contained">Go Back</IconButton>
        </a>
      </Link>
      <HeaderBox
        maxWidth="xs"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image src={article.attributes.logo} />
        <Typography>
          Written by Rupak Thapa Magar on{" "}
          {moment(article.attributes.createdAt).format("MMM Do YYYY")}
        </Typography>
        <Typography variant="h1" textAlign="center">
          {article.attributes.title}
        </Typography>
        {/* <Box>
          {blog.tags &&
            blog.tags.map((each, index) => (
              <Chip
                key={index}
                label={each}
                color="primary"
                sx={{ margin: "0 0.3rem" }}
              />
            ))}
        </Box> */}
        <ContentBox
          sx={{
            fontSize: {
              md: "120%",
              sm: "100%",
              xs: "90%",
            },
          }}
          maxWidth="xs"
        >
          {parse(article.attributes.body)}
        </ContentBox>
      </HeaderBox>
    </>
  );
};

export default Single;
