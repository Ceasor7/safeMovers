'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null);
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/data/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error('Error fetching blog post:', error));
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto max-w-4xl py-10">
      <img
        src={`http://localhost:5000/uploads/${post.image}`}
        alt={post.title}
        className="w-full h-auto mb-4"
      />
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.description}</p>
      <h2 className="text-xl font-semibold mt-4">{post.heading}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: post.contentText }}
        className="prose mt-4"
      />
      <Link href="/blog" className="text-blue-500 hover:underline">
        Back to all blogs
      </Link>
    </div>
  );
}
