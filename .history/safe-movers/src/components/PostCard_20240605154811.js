import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export default function PostCard({ image, title, datePublished }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className=" text-black">
          <div className="flex flex-col items-center justify-center text-center">
            <div className=" flex justify-center items-center">
              <Image src={image} alt={title} width={180} height={150} />
            </div>
            <p>{title}</p>
            <p>{datePublished}</p>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
