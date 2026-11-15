import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function NewsDetailPage({ params }) {
  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);
  if (!news) {
    return <p>News not found</p>;
  }
  return (
    <article id="page">
      <h1>{news.title}</h1>
      <Image
        src={`/images/news/${news.image}`}
        alt={news.title}
        width={300}
        height={200}
      />
      <p>{news.date}</p>
      <p>{news.content}</p>
    </article>
  );
}
