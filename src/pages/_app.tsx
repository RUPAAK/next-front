import "../styles/globals.css";
import type { AppProps } from "next/app";
import { globalTheme } from "theme";
import Layout from "components/Layout";
import { ThemeProvider } from "@mui/material";
import { adminSerice } from "http/admin-service";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  const client = React.useRef(new QueryClient());
  return (
    <QueryClientProvider client={client.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={globalTheme}>
          <NextNProgress />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;
