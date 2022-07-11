import Navbar from "components/Navbar";
import { adminSerice } from "http/admin-service";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeArticle from "page-components/home/HomeArticle";
import Intro from "page-components/home/Intro";
import { dehydrate, QueryClient, useQuery } from "react-query";

import { AllBlogResponse, Blog } from "types/blog";
import styles from "../styles/Home.module.css";

const getBlogs = async () => await adminSerice.getAllArticles();

const Home: NextPage<{ blogs?: Blog[] }> = ({ blogs }) => {
  const { data, isLoading, isFetching } = useQuery("blogs", getBlogs);

  console.log(data);
  return (
    <>
      <Intro />
      {data && <HomeArticle blogs={data.data!} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const client = new QueryClient();

  await client.prefetchQuery('blogs', getBlogs)
  // const blogs = await adminSerice.getAllArticles();

return {
  props: {
    dehydratedState: dehydrate(client)
  }
}

  // if (!blogs) {
  //   console.log("hit");
  //   return {
  //     props: {
  //       total: 0,
  //       blogs: [],
  //     },
  //   };
  // }
  // return {
  //   props: {
  //     total: blogs.total,
  //     blogs: blogs.data,
  //   },
  // };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const blogs = await adminSerice.getAllArticles();

//   if (!blogs) {
//     console.log("hit");
//     return {
//       props: {
//         total: 0,
//         blogs: [],
//       },
//     };
//   }
//   return {
//     props: {
//       total: blogs.total,
//       blogs: blogs.data,
//     },
//   };
// };

export default Home;
