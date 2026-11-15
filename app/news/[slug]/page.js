import { DUMMY_NEWS } from "@/dummy-news";
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

export default function NewsDetailPage({ params }) {
  const news = DUMMY_NEWS.find((item) => item.slug === params.slug);

  if (!news) {
    return (
      <div className={classes.missing}>
        <p>News not found.</p>
        <Link href="/news" className={classes.back}>
          Back to all news
        </Link>
      </div>
    );
  }

  return (
    <article className={classes.page}>
      <h1 className={classes.title}>{news.title}</h1>
      <Image
        src={`/images/news/${news.image}`}
        alt={news.title}
        priority
        width={1200}
        height={600}
        className={classes.image}
      />
      <time className={classes.date} dateTime={news.date}>
        {formatDate(news.date)}
      </time>
      <p className={classes.content}>{news.content}</p>
    </article>
  );
}
