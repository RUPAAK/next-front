import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { ThemeProvider } from "@material-ui/core";
import { globalTheme } from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <h1>Hello</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
