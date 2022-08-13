import { serialize } from "next-mdx-remote/serialize";

export const serializeMark = async (body: string) => {
  return await serialize(body);
};
