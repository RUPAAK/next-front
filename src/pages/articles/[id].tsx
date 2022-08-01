import { Box, experimentalStyled } from "@mui/material";
import Single from "components/Single";
import { adminSerice } from "http/admin-service";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Blog, BlogResponse, StrapiArticle, StrapiAttrs } from "types/blog";

// articles?filters[slug][$eq]=git-for-beginner&populate=logo

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

const config = "";
const getDetailBlog = async (slug: Pick<StrapiAttrs, "slug">) =>
  await adminSerice.getSingleStripe({ slug, config });

const ArticleDetail: NextPage<{ blog: Blog | null }> = ({ blog }) => {
  const router = useRouter();
  const id = router.query.id as unknown as Pick<StrapiAttrs, "slug">;

  const { data, isLoading, isFetching } = useQuery(["blog", id], () =>
    getDetailBlog(id)
  );

  return (
    <MainWrapper>
      {data != null && data.data.length > 0 && (
        <Single article={data!.data[0]} />
      )}
    </MainWrapper>
  );
};

export default ArticleDetail;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const slug = ctx.params!.id as unknown as Pick<StrapiAttrs, "slug">;

  const client = new QueryClient();

  await client.prefetchQuery("blogs", () => getDetailBlog(slug));

  return {
    props: {
      dehydratedState: dehydrate(client),
    },
  };
};
