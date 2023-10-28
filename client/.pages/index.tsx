import type { NextPage } from "next";
import Head from "index/next";
import { useGetPageByTitleQuery } from "@/gql";

const Home: NextPage = () => {
  const { data } = useGetPageByTitleQuery({ variables: { title: "Home" } });
  return (
    <>
      <h1>{data?.pageByTitle?.title}</h1>;
      <div
        dangerouslySetInnerHTML={{ __html: data?.pageByTitle?.bodyHtml ?? "" }}
      />
    </>
  );
};
export default Home;
