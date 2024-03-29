import Navbar from "components/Navbar";
import { adminSerice } from "http/admin-service";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeArticle from "page-components/home/HomeArticle";
import Intro from "page-components/home/Intro";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { AllBlogResponse, Blog } from "types/blog";
import styles from "../styles/Home.module.css";
import { Box, CircularProgress } from "@mui/material";

const config = "pagination[page]=1&pagination[pageSize]=10&sort=createdAt%3Adesc";

const getBlogs = async () => await adminSerice.getStripe(config);

const Home: NextPage<{ blogs?: Blog[] }> = ({ blogs }) => {
  const { data, isLoading, isFetching } = useQuery(["blogs"], getBlogs);

  return (
    <>
      <Intro />
      {isLoading ? (
        "Loading Articles"
      ) : // <CircularProgress />
      data ? (
        <HomeArticle articles={data.data} />
      ) : (
        "Failed to get blogs"
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new QueryClient();

  await client.prefetchQuery(["staticBlogs"], getBlogs);

  return {
    props: {
      dehydratedState: dehydrate(client),
    },

    revalidate: 10,
  };
};

export default Home;
