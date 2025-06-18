import Link from 'next/link';

import { fetchBlogPosts } from '@/app/lib/data';

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              // className={}
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="text-gray-600">{new Date(post.published_at).toLocaleDateString()}</p>
            {/* move truncating to query */}
            <p>{post.content.slice(0, 325)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}