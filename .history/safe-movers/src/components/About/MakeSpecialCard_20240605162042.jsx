import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const MakeSpecialCard = ({ title, image, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <img src={image} alt={title} className=" h-36 w-40" />
      </CardContent>
    </Card>
  );
};

export default MakeSpecialCard;
