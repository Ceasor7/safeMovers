import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const ShopItemsCard = ({
  image,
  title,
  price,
  size,
  material,
  weight,
  ideal,
  purpose1,
  purpose2,
  purpose3,
  purpose4,
  purpose5,
}) => {
  return (
    <Card>
      <CardHeader>
        <img
          src={image}
          alt="product image"
          className="w-auto h-auto rounded-xl"
        />
        <CardTitle> {title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{size}</p>
        <p>{material}</p>
        <p>{weight}</p>
        <p>{ideal}</p>
        <ul className=" list-disc ml-4">
          <li>{purpose1}</li>
          <li>{purpose2}</li>
          <li>{purpose3}</li>
          <li>{purpose4}</li>
          <li>{purpose5}</li>
        </ul>
      </CardContent>

      <CardFooter>
        <div className='flex flex-col gap-8 w-full items-center justify-center mb-6'>
          <div className='font-bold text-xl'>
            {price}
          </div>
          <div className='py-4 w-full bg-black text-white px-2 text-center hover:bg-[#00008B] rounded-md'>
            <Link
              href='/purchase-request'>
              Send Purchase Request
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ShopItemsCard;
