import { fetchBlogPost } from '@/app/lib/data';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!slug) {
    return <div>Loading...</div>;
  }

  const post = await fetchBlogPost(slug);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{new Date(post.published_at).toLocaleDateString()}</p>
      <p>{post.content}</p>
    </div>
  );
}