import React, { useEffect } from "react";
import { experimentalStyled, styled } from "@material-ui/core/styles";
import { Box, Chip } from "@material-ui/core";
import parse from "html-react-parser";
import { aboutMe } from "aboutme";

const screenPadding = 255;



const About = () => {

  return (
    <>
      {/* <MainWrapper style={{ lineHeight: "40px" }}> */}
       <div  style={{ lineHeight: "40px" }}>
       {parse(aboutMe())}
       </div>
      {/* </MainWrapper> */}
    </>
  );
};

export default About;
