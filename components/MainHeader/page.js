"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.jpg";
import classes from "./page.module.css";

export const MainHeader = () => {
  const path = usePathname();
  const onHome = path === "/";
  const onNews = path.startsWith("/news");
  const onArchive = path.startsWith("/archive");

  return (
    <header className={classes.header}>
      <nav className={classes.nav} aria-label="Main">
        <Link href="/" className={classes.logoLink}>
          <Image
            src={logo}
            alt="A folded newspaper"
            fill
            priority
            sizes="72px"
            className={classes.logoImage}
          />
        </Link>
        <ul className={classes.list}>
          <li>
            <Link
              href="/"
              className={onHome ? `${classes.link} ${classes.active}` : classes.link}
              aria-current={onHome ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className={onNews ? `${classes.link} ${classes.active}` : classes.link}
              aria-current={onNews ? "page" : undefined}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className={
                onArchive ? `${classes.link} ${classes.active}` : classes.link
              }
              aria-current={onArchive ? "page" : undefined}
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
