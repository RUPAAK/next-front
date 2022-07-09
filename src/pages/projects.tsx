import React from "react";
import { Box, Typography, Grid, experimentalStyled } from "@mui/material";
import { projects } from "projects";
import Project from "components/Project";

const screenPadding = 255;

const MainWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    padding: 0.8rem ${screenPadding}px;
      @media (max-width: ${theme.breakpoints.values.lg}px) {
        padding: 0.8rem ${screenPadding / 1.5}px;
      }
      @media (max-width: 1000px) {
        padding: 0.8rem  0;
      }
  `
);

const index = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        maxWidth="xs"
      >
        <Typography variant="h1">Projects</Typography>
        <Box py={2}>
          <Typography variant="body2" textAlign="center">
            Some of my project&apos;s source and demo cannot be provided due to
            client privcy and such.
          </Typography>
        </Box>
      </Box>
      <Box maxWidth="xs" my={5}>
        <Typography>In Progress..</Typography>
        {/* <Grid container spacing={4}>
          {projects.map((pro, index) => {
            return (
              // <Grid item xs={4}>
              //   Hello
              // </Grid>
              <Project
                key={index}
                title={pro.title}
                desc={pro.desc}
                source={pro.source}
                tags={pro.tags}
                demo={pro.demo}
              />
            );
          })}
        </Grid> */}
      </Box>
    </>
  );
};

export default index;
