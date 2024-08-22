import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export default function PostCard({ image, title, datePublished }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className=" text-black">
          <div className="flex flex-col sm:flex-row sm:gap-x-8 gap-y-4 items-center justify-center text-center">
            <div className=" flex justify-center items-center">
              <Image src={image} alt={title} width={180} height={150} />
            </div>
            <div>
              <p className=" text-2xl font-bold">{title}</p>
              <p className=" text-sm italic">{datePublished}</p>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
