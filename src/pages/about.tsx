import React, { useEffect } from "react";

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
