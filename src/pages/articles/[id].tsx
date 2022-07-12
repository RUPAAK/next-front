import { Box, experimentalStyled } from "@mui/material";
import Single from "components/Single";
import { adminSerice } from "http/admin-service";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Blog, BlogResponse } from "types/blog";

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

const getDetailBlog = async (id: string) =>
  await adminSerice.getDetailArticle(id);

const ArticleDetail: NextPage<{ blog: Blog | null }> = ({ blog }) => {
  const router = useRouter();
  const id = router.query.id as unknown as string;

  const { data, isLoading, isFetching } = useQuery(["blog"], () =>
    getDetailBlog(id)
  );

  return (
    <MainWrapper>{data != null && <Single blog={data!.data} />}</MainWrapper>
  );
};

export default ArticleDetail;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params!.id as string;

  const client = new QueryClient();

  await client.prefetchQuery("blogs", () => getDetailBlog(id));

  return {
    props: {
      dehydratedState: dehydrate(client),
    },
  };

  // const blog = await adminSerice.getDetailArticle(id as string);
  // if (!blog) {
  //   return {
  //     props: {
  //       blog: null,
  //     },
  //   };
  // }

  // return {
  //   props: {
  //     blog: blog.data,
  //   },
  // };
};
