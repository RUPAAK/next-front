import {
  Box,
  experimentalStyled,
  Hidden,
  Menu,
  Tooltip,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const screenPadding = 255;
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

&:hover{
    border: none;
      background: #B0ACAC;

  }

  @media (max-width: ${theme.breakpoints.values.lg}px) {
    flex-direction: column;
    align-items: center;
    // margin: 0 0.5rem;
  }
  @media (max-width: ${theme.breakpoints.values.md}px) {
    margin: 0 0.5rem;
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
        <Hidden mdDown>
          <Menu sx={{ height: "20px" }} />
        </Hidden>
        <Typography
        variant="h5"
          sx={{
            paddingLeft: "2rem",
            letterSpacing: "0.5px",
          }}
        >
          Rupak Magar
        </Typography>
      </Box>
      <MiddleBox>
        {/* <Link to="/articles"> */}
        <CustomButton>
          <Link href="/home">
            <a>
              <Image
                alt="me"
                src="/assets/images/article.png"
                height="20"
                width="20"
              />
            </a>
          </Link>
          <Typography>Articles</Typography>
        </CustomButton>

        <CustomButton>
          <Link href="/home">
            <a>
              <Image
                alt="me"
                src="/assets/images/project.png"
                height="20"
                width="20"
              />
            </a>
          </Link>
          <Typography>Projects</Typography>
        </CustomButton>

        <CustomButton>
          <Link href="/home">
            <a>
              <Image
                alt="me"
                src="/assets/images/about_me.png"
                height="20"
                width="20"
              />
            </a>
          </Link>
          <Typography>About me</Typography>
        </CustomButton>
        {/* </Link> */}
      </MiddleBox>
      <MiddleBox>
        <Hidden smDown>
          <SocialIcon>
            <Link href="/home">
              <a>
                <Image
                  alt="me"
                  src="/assets/images/github.png"
                  height="64"
                  width="64"
                />
              </a>
            </Link>
          </SocialIcon>
          <SocialIcon>
            <Link href="/home">
              <a>
                <Image
                  alt="me"
                  src="/assets/images/twitter.png"
                  height="64"
                  width="64"
                />
              </a>
            </Link>
          </SocialIcon>
          <SocialIcon>
            <Link href="/home">
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

export default Navbar;
