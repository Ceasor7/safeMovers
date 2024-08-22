import Image from 'next/image';

export default function PostCard({ image, title, datePublished }) {
  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={title} width={120} height={90} />
        <CardDescription className=" text-black">
          <div>
            <p>{title}</p>
            <p>{datePublished}</p>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
