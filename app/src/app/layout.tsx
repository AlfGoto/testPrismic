import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/bonjour">Bonjour</Link>
          <Link href="/trobo">TroBo</Link>
        </div>
        <div className="">
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </div>
      </body>
    </html>
  );
}
