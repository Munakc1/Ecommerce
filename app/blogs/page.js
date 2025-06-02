// app/blogs/page.js

import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Gaming Keyboards of 2025',
    description: 'Discover the best mechanical gaming keyboards you can buy this year.',
    date: '2025-05-01',
    slug: 'top-10-gaming-keyboards-2025',
  },
  {
    id: 2,
    title: 'Best Mouse for FPS Gaming',
    description: 'Precision and speed: A deep dive into top mice for competitive FPS players.',
    date: '2025-04-28',
    slug: 'best-mouse-fps-gaming',
  },
  {
    id: 3,
    title: 'RGB Setup Tips for Your Gaming Desk',
    description: 'Create an aesthetic and immersive RGB gaming environment.',
    date: '2025-04-20',
    slug: 'rgb-setup-tips',
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Gaming Blog</h1>

      <div className="space-y-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-6 rounded-lg border shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-3">{blog.description}</p>
            <div className="text-sm text-gray-500 mb-2">Published on {blog.date}</div>
            <Link
              href={`/blogs/${blog.slug}`}
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
