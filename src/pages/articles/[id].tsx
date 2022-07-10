import { Box, experimentalStyled } from "@mui/material";
import Single from "components/Single";
import { adminSerice } from "http/admin-service";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { Blog } from "types/blog";

const screenPadding = 255;

const MainWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    padding: 0.8rem ${screenPadding}px;
      @media (max-width: ${theme.breakpoints.values.lg}px) {
        padding: 0.8rem ${screenPadding / 1.5}px;
      }
      @media (max-width: 1000px) {
        padding: 0.8rem  0;
      }
  `
);

const ArticleDetail: NextPage<{ blog: Blog | null }> = ({ blog }) => {
  return <MainWrapper>{blog != null && <Single blog={blog} />}</MainWrapper>;
};

export default ArticleDetail;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params!.id;
  const blog = await adminSerice.getDetailArticle(id as string);
  if (!blog) {
    return {
      props: {
        blog: null,
      },
    };
  }

  return {
    props: {
      blog: blog.data,
    },
  };
};
