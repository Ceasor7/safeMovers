import Link from "next/link";

const ServicesCard = ({ image, title, description, link, linkUrl }) => {
  return (
    <section className="shadow-lg flex flex-col justify-between bg-white rounded-t-2xl h-full hover:bg-[#00008B] hover:text-white transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-center text-center flex-grow mb-6">
        <img
          src={image}
          alt="Services image"
          className="w-32 h-32 rounded-full mt-6"
        />
        <div className="p-4">
          <h1 className="text-center py-4 font-bold text-xl">{title}</h1>
        </div>
        <div className="flex-grow">
          <p className="px-4 mb-4">{description}</p>
        </div>
      </div>
      <div className="mt-auto w-full">
        <Link href={linkUrl}>
          <div className="block bg-[#1b1bbd] w-full text-white p-2 text-center hover:bg-white hover:border-b hover:border-t border-[#00008B] hover:text-[#00008B] transition-all duration-300 ease-in-out">
            {link}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServicesCard;
