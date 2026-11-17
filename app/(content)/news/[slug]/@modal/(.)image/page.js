"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { getNewsImageBySlug } from "@/lib/news";

async function NewsImage({ slug }) {
  const news = await getNewsImageBySlug(slug);
  
  if (!news) {
    notFound();
  }
  return (
    <Image
      src={`/images/news/${news.image}`}
      alt={news.title}
      width={1200}
      height={600}
    />
  );
}

export default function ModalImagePage({ params }) {
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        router.back();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <div className="modal-backdrop" onClick={() => router.back()}>
      <dialog
        className="modal"
        open
        aria-label={params.slug}
        onClick={(event) => event.stopPropagation()}
      >
        <Suspense fallback={<p>Loading news image...</p>}>
          <NewsImage slug={params.slug} />
        </Suspense>
        <button
          type="button"
          className="modal-close"
          onClick={() => router.back()}
        >
          Close
        </button>
      </dialog>
    </div>
  );
}
