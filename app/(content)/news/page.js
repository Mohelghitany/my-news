import { Suspense } from "react";
import classes from "./page.module.css";
import NewsList from "@/components/NewsList/page";
import { getAllNews } from "@/lib/news";

async function AllNews() {
  const news = await getAllNews();
  return <NewsList news={news} />;
}

export default async function NewsPage() {
  return (
    <section className={classes.page}>
      <h1 className={classes.heading}>All News</h1>

      <Suspense fallback={<div>Loading news...</div>}>
        <AllNews />
      </Suspense>
    </section>
  );
}
