import React, { FC } from "react";
import { Box, experimentalStyled } from "@material-ui/core";
import Navbar, { screenPadding } from "./Navbar";

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
const LayoutWrapper = experimentalStyled(Box)(
  ({ theme }) => `
          // font-weight: ${theme.typography.fontWeightBold};
  `
);

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
