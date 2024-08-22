import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({ post }) {
  const { title, excerpt, publishedAt, tags } = post;
  return (
    <div className="border-[#cc5500ac] border rounded-md p-8 mt-8">
      <Link href={`/posts/${post.slug?.current}`}>
        <div>
          <div>
            <h2 className="text-xl font-bold pb-6">{title}</h2>
          </div>
          <div>
            <Image>
            </Image>
          </div>
          <div>
            <p className='pb-6'>{excerpt}</p>
          </div>
          <div>
            <p className="font-light italic pb-2">
              {new Date(publishedAt).toDateString()}
            </p>
          </div>
        </div>
        <div className='flex'>
          {tags?.map((tag) => (
            <span
              key={tag?._id}
              className="mr-2 p-2 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900"
            >
              #{tag?.name}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
