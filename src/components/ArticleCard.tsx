'use client';
import Image from 'next/image';

export interface Article {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative w-full h-40">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg">{article.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{article.date}</p>
        <p className="text-sm text-gray-700 mb-4">{article.description}</p>
        <div className="flex gap-2 flex-wrap">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
