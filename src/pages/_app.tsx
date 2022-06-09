import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import { globalTheme } from "theme";
import Layout from "components/Layout";

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
