"use client";

import Link from "next/link";
import classes from "./@archive/error.module.css";

export default function ArchiveError({ error }) {
  return (
    <section className={classes.notice}>
      <h1 className={classes.title}>
        {error?.message || "The archive could not be loaded."}
      </h1>
      <Link href="/archive" className={classes.action}>
        Browse the archive
      </Link>
    </section>
  );
}
