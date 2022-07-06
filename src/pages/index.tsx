import Navbar from "components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeArticle from "page-components/home/HomeArticle";
import Intro from "page-components/home/Intro";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <HomeArticle />
    </>
  );
};

export default Home;
