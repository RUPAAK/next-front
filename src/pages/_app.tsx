import "../styles/globals.css";
import type { AppProps } from "next/app";
import { globalTheme } from "theme";
import Layout from "components/Layout";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
