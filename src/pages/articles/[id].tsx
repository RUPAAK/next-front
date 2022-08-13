import { Box, experimentalStyled } from "@mui/material";
import Single from "components/Single";
import { adminSerice } from "http/admin-service";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
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
const getDetailBlog = async (slug: Pick<StrapiAttrs, "slug">) =>
  await adminSerice.getSingleStripe({ slug, config });

const ArticleDetail: NextPage<{ article: StrapiArticle | null }> = ({
  article,
}) => {
  return <MainWrapper>{article && <Single article={article} />}</MainWrapper>;
};

export default ArticleDetail;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const slug = ctx.params!.id as unknown as Pick<StrapiAttrs, "slug">;

  const getDetailBlog = async (slug: Pick<StrapiAttrs, "slug">) =>
    await adminSerice.getSingleStripe({ slug, config });

  const data = await getDetailBlog(slug);

  if (data && data.data.length > 0) {
    const markDo = await serializeMark(data.data[0].attributes.body);

    return {
      props: {
        article: {
          ...data.data[0],
          attributes: {
            ...data.data[0].attributes,
            body: markDo,
          },
        },
      },
    };
  }

  return {
    props: {
      article: null,
    },
  };
};
