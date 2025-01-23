import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const client = createClient();

  /*
   * `params.uid` contains an array of each part of the URL separated by a `/`.
   * In this example, the last part is the document's UID.
   */
  const uid = params.pagePath[params.pagePath.length - 1];

  const page = await client
    .getByUID("page", uid)
    .catch(() => notFound());

  return <h1>{page.uid}</h1>;
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return {
      pagePath: page.url.split("/").filter(Boolean),
    };
  });
}