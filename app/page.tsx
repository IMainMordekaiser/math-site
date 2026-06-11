import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Nguyen Duy Anh
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            A personal archive of mathematical articles
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Notes, proofs, and ideas written as full articles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug || article.title}
              href={`/articles/${article.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
                  {article.category}
                </span>
                <span className="rounded-full border px-3 py-1 text-xs">
                  {article.level}
                </span>
              </div>

              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-3 text-slate-600">{article.summary}</p>
              

              <div className="mt-4 text-sm text-slate-500">
                {article.author} · {article.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}