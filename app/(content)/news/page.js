import { Suspense } from "react";
import classes from "./page.module.css";
import NewsList from "@/components/NewsList/page";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();
  return (
    <section className={classes.page}>
      <h1 className={classes.heading}>All News</h1>

      <Suspense fallback={<div>Loading news...</div>}>
        <NewsList news={news} />
      </Suspense>
    </section>
  );
}
