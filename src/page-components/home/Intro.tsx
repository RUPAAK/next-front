import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";

import { experimentalStyled, styled } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";

const CardCover = experimentalStyled(Card)(
  ({ theme }) => `
        position: relative;
        object-cover: cover;
        max-width: 150px;
        height: auto;

        .MuiCardMedia-root {

          height: ${theme.spacing(10)};
        }
        @media (max-width: ${theme.breakpoints.values.md}px) {
            min-width: 150px;
            min-height:  ${theme.spacing(10)};
  
        }
        @media (max-width: ${theme.breakpoints.values.sm}px) {
          min-width: 150px;
          min-height:  ${theme.spacing(10)};
  
        }
    `
);

const InnerGrid = experimentalStyled(Grid)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.md}px) {
      
      order: 0;
  
    }
    `
);
const OuterGrid = experimentalStyled(Grid)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.md}px) {
      order: 1;
      
    }
    `
);

const Intro = () => {
  return (
    <Box
      maxHeight="xs"
      py={{
        md: "3.5rem",
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" display="flex">
        <OuterGrid item md={7} xs={12}>
          <Box pb={2}>
            <Typography variant="h2">Hey, I'm Rupak.</Typography>
          </Box>
          <Typography variant="subtitle1">
            I am a software developer from Nepal. This is a place where I try to
            post everything I have learned.
          </Typography>

          <Box pt={3}>
            <Button sx={{ mt: { xs: 2, md: 0 } }} size="small" variant="text">
              <Image
                alt="me"
                src="/assets/images/about_me.png"
                height="20"
                width="20"
              />
              <Box pl={1}>
                <Link href="about">
                  <a>More about me</a>
                </Link>
              </Box>
              {/* <Link to={`/about`}>More about me</Link> */}
            </Button>
          </Box>
        </OuterGrid>
        <InnerGrid item md={4} xs={2}>
          <CardCover>
            <Image
              alt="me"
              src="/assets/images/profile.png"
              height="100%"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
          </CardCover>
        </InnerGrid>
      </Grid>
    </Box>
  );
};

export default Intro;
