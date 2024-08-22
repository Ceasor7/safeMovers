import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ image, title, datePublished }) {
  return (
    <div className="border-[#cc5500ac] border rounded-md">
      <Link href="/">
        <div className=" flex flex-col justify-center items-center px-0">
          <div>
            <Image src={image} alt={title} height={80} width={120} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <div>
            <p className="font-light italic">{datePublished}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
