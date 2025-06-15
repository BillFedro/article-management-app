import { NextResponse } from 'next/server';

export function GET() {
  const dummyArticles = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    title: `Article Title ${i + 1}`,
    date: `April ${i + 1}, 2025`,
    description: `This is a short description for article ${i + 1}.`,
    image: '/articles/sample.jpg',
    tags: ['UI/UX', 'Frontend', 'Tips'].slice(0, (i % 3) + 1),
  }));

  return NextResponse.json(dummyArticles);
}
