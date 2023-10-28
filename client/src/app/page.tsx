import { useGetPageByTitleQuery } from "@/gql";
import Image from "next/image";

export default function Home() {
  const { data } = useGetPageByTitleQuery({ variables: { title: "Home" } });
  <>
    <h1>{data?.pageByTitle?.title}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: data?.pageByTitle?.bodyHtml ?? "" }}
    />
  </>;
  return <main>Home</main>;
}
