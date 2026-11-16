import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.jpg";
import classes from "./page.module.css";
import NavLink from "../NavLink/NavLink";

export const MainHeader = () => {
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
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
