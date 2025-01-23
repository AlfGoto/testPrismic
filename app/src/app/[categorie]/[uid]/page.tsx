import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return <h1>{page.uid}</h1>;
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return {
      category: page.data.category.uid,
      uid: page.uid,
    };
  });
}
