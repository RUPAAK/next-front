import Navbar from "components/Navbar";
import { adminSerice } from "http/admin-service";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeArticle from "page-components/home/HomeArticle";
import Intro from "page-components/home/Intro";
import { AllBlogResponse, Blog } from "types/blog";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <>
      <Intro />
      <HomeArticle blogs={blogs} />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await adminSerice.getAllArticles(8);

  if (!blogs) {
    return {
      props: {
        total: 0,
        blogs: [],
      },
    };
  }
  return {
    props: {
      total: blogs.total,
      blogs: blogs.data,
    },
  };
};

export default Home;
