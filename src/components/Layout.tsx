import React, { FC } from "react";
import { Box, experimentalStyled } from "@material-ui/core";
import Navbar from "./Navbar";


const LayoutWrapper = experimentalStyled(Box)(
  ({ theme }) => `
     background: red;
          // font-weight: ${theme.typography.fontWeightBold};
  `
);

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
