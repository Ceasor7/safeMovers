import axios from 'axios';
import { useRouter } from 'next/router';

export default function BlogPost({ blogPost }) {
  const router = useRouter();

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-5xl bg-white text-black min-h-content p-5">
      <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
      <img
        src={`http://localhost:5000/uploads/${blogPost.image}`}
        alt={blogPost.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{blogPost.heading}</h2>
      <p className="mb-4">{blogPost.description}</p>
      <div className="content-text">{blogPost.contentText}</div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const blogData = await axios
    .get('http://localhost:5000/api/data')
    .then((response) => response.data);

  return {
    props: {
      blogPost: blogData[id] || null,
    },
  };
}
