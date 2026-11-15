import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  return (
    <section id="page">
      <h1>All News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <Image
                src={`/images/news/${news.image}`}
                alt={news.title}
                width={300}
                height={200}
              />
              <h2>{news.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
