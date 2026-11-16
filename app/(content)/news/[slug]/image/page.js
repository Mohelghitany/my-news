import { notFound } from "next/navigation";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import classes from "./page.module.css";

export default function NewsImagePage({ params }) {
  const news = DUMMY_NEWS.find((item) => item.slug === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <div className={classes.page}>
      <Image
        src={`/images/news/${news.image}`}
        alt={news.title}
        width={1200}
        height={600}
        priority
        className={classes.image}
      />
    </div>
  );
}
