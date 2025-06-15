'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import ArticleCard, { Article } from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
    }

    fetchArticles();
  }, []);

  const paginatedArticles = useMemo(() => {
    const start = (page - 1) * articlesPerPage;
    return articles.slice(start, start + articlesPerPage);
  }, [page, articles]);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Showing text */}
        <p className="text-sm text-gray-600 mb-4">
          Showing {paginatedArticles.length} of {articles.length} articles
        </p>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      </main>
      <Footer />
    </>
  );
}
