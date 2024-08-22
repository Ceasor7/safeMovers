import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const LandingPageServicesSection = ({ image, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={title} width={25} height={15} />
        <CardTitle className=" text-black">{title}</CardTitle>
        <CardDescription className=" text-black">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LandingPageServicesSection;
