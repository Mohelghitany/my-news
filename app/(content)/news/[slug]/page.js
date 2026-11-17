import { Suspense } from "react";
import { getNewsBySlug } from "@/lib/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";

function formatDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function NewsDetail({ slug }) {
  const news = await getNewsBySlug(slug);
  if (!news) {
    notFound();
  }
  return (
    <article className={classes.page}>
      <Link href={`/news/${news.slug}/image`} className={classes.imageLink}>
        <Image
          src={`/images/news/${news.image}`}
          alt={news.title}
          priority
          width={1200}
          height={600}
          className={classes.image}
        />
      </Link>
      <time className={classes.date} dateTime={news.date}>
        {formatDate(news.date)}
      </time>
      <p className={classes.content}>{news.content}</p>
    </article>
  );
}

export default async function NewsDetailPage({ params }) {
  return (
    <Suspense fallback={<p className={classes.prompt}>Loading news...</p>}>
      <NewsDetail slug={params.slug} />
    </Suspense>
  );
}
