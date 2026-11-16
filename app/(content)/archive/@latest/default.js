import NewsList from "@/components/NewsList/page";
import { getLatestNews } from "@/lib/news";
import classes from "./page.module.css";

export default function LatestPage() {
  const news = getLatestNews();

  return (
    <section>
      <h2 className={classes.heading}>Latest</h2>
      <NewsList news={news} />
    </section>
  );
}
