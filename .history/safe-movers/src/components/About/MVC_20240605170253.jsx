import MVCCard from './MVCCard';

const cards = [
  {
    imageSrc: '/auto-image-carousel.jpg',
    title: 'Our Mission',
    description:
      'At Safe Movers, our mission is to provide seamless moving solutions tailored to diverse needs, ensuring stress-free relocations with precision and care. We aim to be trusted partners, delivering unparalleled customer service built on integrity and respect.',
  },
  {
    imageSrc: '/auto-image-carousel.jpg',
    title: 'Our Vision',
    description:
      'Our vision is to be the premier choice in the moving industry, setting new standards of excellence through innovation and reliability. We strive to expand our reach while maintaining unwavering commitment to customer satisfaction and community engagement.',
  },
  {
    imageSrc: '/auto-image-carousel.jpg',
    title: 'Our Core Values',
    description:
      'Our Core Values at Safe Movers embody the essence of integrity, excellence, and customer satisfaction. We champion teamwork, respect, and accountability, fostering a culture of transparency and reliability that resonates through every aspect of our service',
  },
];

const MVC = () => {
  return (
    <div>
      <MVCCard cards={cards} />
    </div>
  );
};

export default MVC;
