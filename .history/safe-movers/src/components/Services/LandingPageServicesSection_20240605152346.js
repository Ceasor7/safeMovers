import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const LandingPageServicesSection = ({ image, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={title} width={30} height={20} />
        <CardTitle className=" text-black">{title}</CardTitle>
        <CardDescription className=" text-black">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LandingPageServicesSection;
