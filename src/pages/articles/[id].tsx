import { Box, experimentalStyled } from "@mui/material";
import Single from "components/Single";
import { adminSerice } from "http/admin-service";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { Blog, BlogResponse, StrapiArticle, StrapiAttrs } from "types/blog";
import { serializeMark } from "utils/serialize";

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

const ArticleDetail: NextPage<{ article: StrapiArticle | null }> = ({
  article,
}) => {
  const [articleState, setArticleState] = useState<StrapiArticle>();
  const router = useRouter();
  const id = router.query.id as unknown as Pick<StrapiAttrs, "slug">;

  const getDetailBlog = async (slug: Pick<StrapiAttrs, "slug">) => {
    {
      const response = await adminSerice.getSingleStripe({ slug, config });
      if (response?.data[0] != articleState) {
        response!.data[0].attributes.body = (await serializeMark(
          response!.data[0].attributes.body
        )) as any;
        setArticleState(response!.data[0]);
      }
    }
  };

  useEffect(() => {
    getDetailBlog(id);
  }, [id]);
  // const { data, isLoading, isFetching } = useQuery(["blog", id], () =>
  //     getDetailBlog(id)
  // );
  // console.log(data)

  return (
    <MainWrapper>
      {articleState && <Single article={articleState!} />}
    </MainWrapper>
  );
};

export default ArticleDetail;

// export const getServerSideProps: GetServerSideProps = async (
//   ctx: GetServerSidePropsContext
// ) => {
//   const slug = ctx.params!.id as unknown as Pick<StrapiAttrs, "slug">;

//   const client = new QueryClient();

//   await client.prefetchQuery(["blog"], () => getDetailBlog(slug));

//   return {
//     props: {
//       dehydratedState: dehydrate(client),
//     },
//   };
// };
