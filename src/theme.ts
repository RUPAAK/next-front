import { createTheme } from "@material-ui/core";

export const globalTheme = createTheme({
  typography: {
    fontFamily: [
      '"Roboto"',
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
    htmlFontSize: 15,
    h1: {
      fontWeight: 700,
      fontSize: 35,
      letterSpacing: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: 21,
      lineHeight: 1.4,
      letterSpacing: 1.2,
    },
    h4: {
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 1.2,
    },
    h5: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 1.2,
    },
    h6: {
      fontSize: 15,
      letterSpacing: 1.2,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
  },
});
