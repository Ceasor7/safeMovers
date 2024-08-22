import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ image, title, datePublished }) {
  return (
    <div className="border-[#cc5500ac] border rounded-md p-8 mt-8">
      <Link href="/">
        <div>
          <div>
            <Image src={image} alt={title} height={80} width={120} />
          </div>
          <div>
            <h2 className="text-xl font-bold pb-6">{title}</h2>
          </div>
          <div>
            <p className="font-light italic pb-2">{datePublished}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
