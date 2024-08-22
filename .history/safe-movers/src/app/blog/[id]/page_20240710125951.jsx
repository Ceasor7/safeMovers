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
      {post.content.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
          <p className="mb-4">{section.text}</p>
          {section.image && (
            <img
              src={section.image}
              alt={section.heading}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
        </div>
      ))}
    </div>
  );
}
