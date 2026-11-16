import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
  return (
    <section className={classes.page}>
      <h1 className={classes.heading}>All News</h1>
      <NewsList news={DUMMY_NEWS} />
    </section>
  );
}
