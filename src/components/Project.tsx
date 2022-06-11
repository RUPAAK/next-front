import {
  Button,
  Card,
  CardHeader,
  Chip,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { projects } from "projects";
import React, { FC } from "react";

type ProjectProps = typeof projects[0];

const Project: FC<ProjectProps> = ({ title, desc, tags, source, demo }) => {
  return (
    <Grid
      md={4}
      sm={6}
      xs={12}
      item
      justifyContent="center"
      display="flex"
      // sx={{ padding: "50px" }}
    >
      <Card sx={{ padding: "15px", border: "1px solid grey" }}>
        <Typography textAlign="center" variant="h4">
          {title}
        </Typography>
        <Box my={2}>
          <Typography>{desc}</Typography>
        </Box>
        {tags.map((each) => (
          <Chip sx={{ margin: "0 5px" }} label={each} />
        ))}
        <Box maxWidth="xs" display="flex" py={2} justifyContent="space-between">
          <Button
            size="small"
            variant="outlined"
            disabled={source ? false : true}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Image
              alt="me"
              src={`/assets/images/github.png`}
              height="15"
              width="15"
            />{" "}
            <a target="_" href={source}>
              Source
            </a>
          </Button>
          <Button
            size="small"
            variant="outlined"
            disabled={demo ? false : true}
          >
            <a href={demo} target="_">
              Demo
            </a>
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default Project;
