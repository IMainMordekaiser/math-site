import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  category: string;
  level: string;
  tags: string[];
  summary: string;
  author: string;
  date: string;
  favorite: boolean;
  body: string;
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames
    .filter((name) => name.toLowerCase().endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const slug = path.parse(fileName).name.toLowerCase();

      return {
        slug,
        title: String(data.title ?? ""),
        category: String(data.category ?? ""),
        level: String(data.level ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        summary: String(data.summary ?? ""),
        author: String(data.author ?? ""),
        date: String(data.date ?? ""),
        favorite: Boolean(data.favorite),
        body: content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}