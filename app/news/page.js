import classes from "./page.module.css";
import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

export default function NewsPage() {
  const news = getLatestNews();
  return (
    <section className={classes.page}>
      <h1 className={classes.heading}>All News</h1>
      <NewsList news={news} />
    </section>
  );
}
