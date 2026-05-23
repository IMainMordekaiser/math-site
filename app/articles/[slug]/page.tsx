import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";

import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles()
    .filter((article) => typeof article.slug === "string" && article.slug.length > 0)
    .map((article) => ({
      slug: article.slug,
    }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/"
          className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-white"
        >
          ← Back to library
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
              {article.category}
            </span>
            <span className="rounded-full border px-3 py-1 text-xs">
              {article.level}
            </span>
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border px-3 py-1 text-xs">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{article.summary}</p>
          <div className="mt-4 text-sm text-slate-500">
            {article.author} · {article.date}
          </div>

          <hr className="my-8 border-slate-200" />

          <div className="max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[[
                    rehypeKatex,
                    {
                      throwOnError: false,
                      macros: {
                        "\\idl": "\\mathfrak{#1}",
                        "\\A": "\\mathbb{A}",
                        "\\R": "\\mathbb{R}",
                        "\\Z": "\\mathbb{Z}",
                        "\\Q": "\\mathbb{Q}",
                        "\\C": "\\mathbb{C}",
                        "\\N": "\\mathbb{N}",
                        "\\P": "\\mathbb{P}",
                        "\\O": "\\mathcal{O}",

                        "\\set": "\\{\\, #1 \\mid #2 \\,\\}",
                        "\\la": "\\langle", "\\ra": "\\rangle",

                        "\\abs": "\\left| #1 \\right|",
                      },
                    },
                  ],
                ]}
              components={{
                code: ({ children }) => (
  <code className="px-1 py-[1px] rounded bg-slate-100 text-[0.8em] text-slate-800">
    {children}
  </code>
),
                h1: ({ children }) => (
                  <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-950">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mb-4 mt-10 text-2xl font-semibold tracking-tight text-slate-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-3 mt-8 text-xl font-semibold text-slate-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-5 text-[17px] leading-8 text-slate-700">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-5 list-disc pl-6 text-[17px] leading-8 text-slate-700">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-5 list-decimal pl-6 text-[17px] leading-8 text-slate-700">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="mb-2">{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-semibold text-slate-950">
                    {children}
                  </strong>
                ),
                blockquote: ({ children }) => {
                  const text = String(children);

                  let color = "border-slate-300";
                  let bg = "bg-slate-50";

                  if (text.includes("Definition")) {
                    color = "border-blue-500";
                    bg = "bg-blue-50";
                  } else if (text.includes("Theorem")) {
                    color = "border-purple-500";
                    bg = "bg-purple-50";
                  } else if (text.includes("Lemma")) {
                    color = "border-green-500";
                    bg = "bg-green-50";
                  } else if (text.includes("Proof")) {
                    color = "border-gray-400";
                    bg = "bg-gray-50";
                  }

  return (
    <blockquote
      className={`my-6 border-l-4 ${color} ${bg} px-4 py-3 text-[16px] leading-7`}
    >
      {children}
    </blockquote>
  );
},
              }}
            >
              {article.body}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}