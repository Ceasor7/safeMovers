'use client';
import { useParams } from 'next/navigation';
import blogData from '../../../../public/blogData.json';

export default function Post() {
  const { id } = useParams();
  const post = blogData.find((post) => post.id == id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
      />
      <p>{post.content}</p>
    </div>
  );
}
