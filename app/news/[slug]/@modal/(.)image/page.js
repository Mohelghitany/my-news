"use client";

import { useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";

export default function ModalImagePage({ params }) {
  const router = useRouter();
  const news = DUMMY_NEWS.find((item) => item.slug === params.slug);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        router.back();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  if (!news) {
    notFound();
  }

  return (
    <div className="modal-backdrop" onClick={() => router.back()}>
      <dialog
        className="modal"
        open
        aria-label={news.title}
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={`/images/news/${news.image}`}
          alt={news.title}
          width={1200}
          height={600}
        />
        <button type="button" className="modal-close" onClick={() => router.back()}>
          Close
        </button>
      </dialog>
    </div>
  );
}
