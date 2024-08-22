'use client';
import OtherServices from '@/components/Services/OtherServices';
import YoutubeVideo from '@/components/Youtube/YoutubeVideo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question:
      'What safety measures are in place during vehicle transportation?',
    answer:
      'We employ secure handling techniques and utilize specialized equipment to ensure the safety of vehicles during transportation. Additionally, our team conducts thorough inspections before and after transit to mitigate any potential risks.',
  },
  {
    question: 'How are pricing and delivery times determined?',
    answer:
      'Pricing depends on various factors, including distance, vehicle type, and specific client requirements. As for delivery times, we strive to meet agreed-upon schedules and communicate transparently with our clients throughout the process.',
  },
];

const whyChooseSafeMovers = [
  {
    title: '',
    description: '',
  },
];

const AutoRelocationService = () => {
  return (
    <div className="my-5  mx-auto max-w-5xl items-center">
      <h1 className="text-4xl font-bold mb-3">
        Best Car Movers in Nairobi, Kenya
      </h1>
      <div className="flex flex-col sm:flex-row sm:gap-x-10">
        <div className="sm:w-2/3 flex flex-col">
          {/* Make this a dynamic section from autorelocation array*/}
          <div>
            <img
              src="/auto-relocation-service.jpg"
              alt=" Auto relocation service banner Safe Movers"
            />
            <p className="my-4">
              Safe Movers stands as a cornerstone in Nairobi’s moving services
              sector, offering an array of relocation solutions tailored to meet
              diverse client needs. Among our specialized services, our Car
              Moving division takes center stage, ensuring secure, efficient,
              and reliable transportation for vehicles to different parts.
            </p>
          </div>
          {/* Make this a dynamic section from autoRelocationDescription array, each div below should be a single object */}
          <div className="my-7">
            <h2 className="text-2xl font-bold">
              Local Vehicle Relocation across Kenya
            </h2>
            <p>
              Our local vehicle relocation services within Kenya are designed to
              simplify the process for clients looking to move their cars across
              cities or regions. With a meticulous approach, we handle every
              aspect of the relocation journey, from the initial pick-up to the
              final delivery. <br /> <br />
              Our experienced team ensures the safe transport of vehicles,
              employing state-of-the-art handling techniques and secure
              transport methods. Whether it’s a single car or a fleet, our focus
              remains on timely and secure deliveries while adhering to the
              highest safety standards
            </p>
          </div>
          <div className="my-7">
            <h2 className="text-2xl font-bold">International Auto Shipping</h2>
            <p>
              For clients seeking to transport vehicles outside the African
              continent, Safe Movers provides international auto shipping
              services. Our global reach and partnerships with renowned
              logistics companies guarantee a smooth transition from one country
              to another, no matter the distance. From documentation and customs
              clearance to selecting the most suitable shipping methods, our
              team handles every detail to ensure a stress-free international
              vehicle relocation experience.
            </p>
          </div>
          <div className="my-7">
            <h2 className="text-2xl font-bold">Cross-Border Transport</h2>
            <p>
              Expanding beyond Kenya’s borders, Safe Movers facilitates
              cross-border transport across neighboring countries and Africa.
              Our comprehensive logistics network and expertise enable us to
              seamlessly transport vehicles to various countries within East
              Africa and beyond. <br /> <br />
              Compliance with international regulations and customs requirements
              is a cornerstone of our service, ensuring a hassle-free experience
              for our clients. We pride ourselves on navigating the complexities
              of cross-border logistics, offering reliable and efficient
              solutions for vehicle relocation.
            </p>
          </div>
          <div className="my-7">
            <h2 className="text-2xl font-bold">FAQs</h2>
            {faqData.map((faq, index) => (
              <div className="my-4" key={index}>
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>
                      {index + 1}. {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
          <div className="my-7">
            <h1 className="text-4xl mb-3 font-bold text-[#00008B]">
              Why choose SafeMovers Movers to Relocate your Vehicle?
            </h1>
            <div>
              <YoutubeVideo />
            </div>
            {/* Make this a dynamic section from expertise array, each h2 title and the explaination below should be a single object */}
            <div className="my-7">
              {servicesOfferedListDescription.map((item, index) => (
                <div key={index}>
                  <div>
                    <h2 className="font-bold my-2 text-lg">{item.title}</h2>
                  </div>
                  <div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 ">
          <OtherServices />
        </div>
      </div>
    </div>
  );
};

export default AutoRelocationService;
