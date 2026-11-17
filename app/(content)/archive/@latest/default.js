import { Suspense } from "react";

import NewsList from "@/components/NewsList/page";
import { getLatestNews } from "@/lib/news";
import classes from "./page.module.css";

async function LatestNews() {
  const news = await getLatestNews();
  return <NewsList news={news} />;
}

export default async function LatestPage() {
  return (
    <section>
      <h2 className={classes.heading}>Latest</h2>
      <Suspense
        fallback={<p className={classes.prompt}>Loading Latest news...</p>}
      >
        <LatestNews />
      </Suspense>
    </section>
  );
}
