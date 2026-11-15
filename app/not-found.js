import Link from "next/link";
import classes from "./not-found.module.css";

export default function NotFoundPage() {
  return (
    <section className={classes.page}>
      <h1 className={classes.title}>Not Found</h1>
      <p className={classes.message}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" className={classes.home}>
        Go to Home
      </Link>
    </section>
  );
}
