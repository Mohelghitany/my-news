import { Suspense } from "react";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getNewsImageBySlug } from "@/lib/news";
import classes from "./page.module.css";

async function NewsImage({ slug }) {
  const news = await getNewsImageBySlug(slug);
  if (!news) {
    notFound();
  }
  return (
    <Image
      src={`/images/news/${news.image}`}
      alt={news.title}
      width={1200}
      height={600}
      priority
      className={classes.image}
    />
  );
}

export default function NewsImagePage({ params }) {
  return (
    <Suspense
      fallback={<p className={classes.prompt}>Loading news image...</p>}
    >
      <NewsImage slug={params.slug} />
    </Suspense>
  );
}
