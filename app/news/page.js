import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";

export default function NewsPage() {
  return (
    <section className={classes.page}>
      <h1 className={classes.heading}>All News</h1>
      <ul className={classes.list}>
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`} className={classes.card}>
              <Image
                src={`/images/news/${news.image}`}
                alt={news.title}
                width={300}
                height={200}
                className={classes.image}
              />
              <h2 className={classes.title}>{news.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
