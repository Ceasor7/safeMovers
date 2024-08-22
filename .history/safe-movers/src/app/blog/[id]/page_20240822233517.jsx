import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

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
    <div className="mx-auto max-w-4xl">
      <img
        src={`http://localhost:5000/uploads/${post.image}`}
        alt={post.title}
        className="w-full h-auto mb-4"
      />
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.description}</p>
      <h2 className="text-xl font-semibold mt-4">{post.heading}</h2>
      <p>{post.contentText}</p>
      <Link href="/blog">
        <a className="text-blue-500 hover:underline">Back to all blogs</a>
      </Link>
    </div>
  );
}
