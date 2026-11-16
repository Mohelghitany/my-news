import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";

export default function NewsList({ news }) {
  return (
    <ul className={classes.list}>
      {news.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.slug}`} className={classes.card}>
            <Image
              src={`/images/news/${item.image}`}
              alt={item.title}
              width={300}
              height={200}
              className={classes.image}
            />
            <h2 className={classes.title}>{item.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
