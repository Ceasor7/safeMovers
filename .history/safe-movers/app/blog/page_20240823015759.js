import axios from 'axios';
import Link from 'next/link';
import OtherServices from '../components/Services/OtherServices';

export default async function SafeMoversBlog() {
  const blogData = await axios
    .get('http://localhost:5000/api/data')
    .then((response) => response.data);

  return (
    <section className="mx-auto max-w-5xl bg-white text-black min-h-content">
      <h1 className="text-2xl font-bold py">
        All the latest Moving news and Trends
      </h1>
      <div className="flex flex-col my-5 sm:flex-row sm:gap-x-10">
        {blogData.length === 0 ? (
          <div>
            <p className="text-center text-lg font-semibold">
              Ooooops!....... No blog posts to read today{' '}
              <span className=" mr-1">
                <Link className=" text-blue-400 underline" href="/">
                  Click here
                </Link>
              </span>
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {blogData.map((post, index) => (
                <div key={post.id} className="bg-white">
                  <div className="border p-4 rounded-lg">
                    <img
                      src={`http://localhost:5000/uploads/${post.image}`}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="mb-4">{post.description}</p>
                    <Link href={`/blog/${post.id}`} legacyBehavior>
                      <a className="text-blue-500 hover:underline">Read More</a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:w-1/3">
              <OtherServices />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
