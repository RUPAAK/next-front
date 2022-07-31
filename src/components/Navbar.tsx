import { Menu } from "@mui/icons-material";

import { Box, experimentalStyled, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const screenPadding = 255;
export const navHeight = 50;

const NavWrapper = experimentalStyled(Box)(
  ({ theme }) => `
  min-height: ${navHeight}px;
    display: flex;
    min-width: 100%;
    padding: 0.8rem ${screenPadding}px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    background: rgb(241,215,154); 
    position: sticky;
    top: 0;
    z-index: 500;

    @media (max-width: ${theme.breakpoints.values.lg}px) {
      padding: 0.8rem ${screenPadding / 1.5}px;
    min-width: 100%;

    }
    @media (max-width: 1000px) {
    min-width: 100%;

      padding: 0.8rem  0;
    }
`
);
const MiddleBox = experimentalStyled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    // *: hover{
    // }
`
);

const CustomButton = experimentalStyled("div")(
  ({ theme }) => `
  border: none;
  display: flex;
  margin: 0 1rem;
  justify-content: space-between; 
  align-items: center;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;

  & *{
    margin: 0 5px;
  }

&:hover{
    border: none;
      background: #B0ACAC;

  }

  @media (max-width: ${theme.breakpoints.values.lg}px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${theme.breakpoints.values.md}px) {

    margin: 0;

    & *{
    margin: 0 ;

    }
  }
  
`
);
const NavIcon = experimentalStyled("img")(
  ({ theme }) => `
height: 20px;
width: 20px;
margin-left: 0.2rem;
`
);

const SocialIcon = experimentalStyled(Box)(
  ({ theme }) => `
height: 22px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
margin: 0 0.8rem;
`
);

const Navbar = () => {
  return (
    <NavWrapper>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* <Hidden mdDown>
          <Menu sx={{ height: "20px" }} />
        </Hidden> */}
        <Hidden xsDown>
          <Typography
            variant="h5"
            sx={{
              paddingLeft: "2rem",
              letterSpacing: "0.5px",
            }}
          >
            <Link href="/">
              <a>Rupak Magar</a>
            </Link>
          </Typography>
        </Hidden>
      </Box>
      <MiddleBox>
        <NavbarItem name="Articles" path="/articles" image="article" />
        {/* <NavbarItem name="Projects" path="/projects" image="project" /> */}
        <NavbarItem name="About me" path="/about" image="about_me" />
      </MiddleBox>
      <MiddleBox>
        <Hidden smDown>
          <SocialIcon>
            {/* <Link href="/home"> */}
            <a href="https://github.com/RUPAAK" target="_">
              <Image
                alt="me"
                src="/assets/images/github.png"
                height="64"
                width="64"
              />
            </a>
            {/* </Link> */}
          </SocialIcon>
          <SocialIcon>
            {/* <Link href="/home"> */}
            <a href="https://twitter.com/rupaakthapa" target="_">
              <Image
                alt="me"
                src="/assets/images/twitter.png"
                height="64"
                width="64"
              />
            </a>
            {/* </Link> */}
          </SocialIcon>
          <SocialIcon>
            <Link href="/">
              <a>
                <Image
                  alt="me"
                  src="/assets/images/moon.png"
                  height="64"
                  width="64"
                />
              </a>
            </Link>
          </SocialIcon>
        </Hidden>
      </MiddleBox>
    </NavWrapper>
  );
};

const NavbarItem = ({
  path,
  image,
  name,
}: {
  path: string;
  image: string;
  name: string;
}) => {
  return (
    <Link href={path}>
      <a>
        <CustomButton>
          <Image
            alt="me"
            src={`/assets/images/${image}.png`}
            height="20"
            width="20"
          />

          <Typography>{name}</Typography>
        </CustomButton>
      </a>
    </Link>
  );
};

export default Navbar;
