import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const LandingPageServicesSection = ({ image, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <img src={image} alt={title} className="h-6 w-6" />
        <CardTitle className=" text-black">{title}</CardTitle>
        <CardDescription className=" text-black">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LandingPageServicesSection;
