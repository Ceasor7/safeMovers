import OtherServices from '@/components/Services/OtherServices';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const defaultService = {
  title: 'Best Fine Art Movers in Nairobi, Kenya',
  coverImage: '/paint.webp',
  serviceDescription:
    'Welcome to Safe Movers, your trusted partner in the safe relocation of fine art pieces across Nairobi and Kenya...',
  expertiseTitle: 'Our Expertise in Fine Art Moving',
  expertiseDescription:
    'Before initiating the relocation process, our team conducts a comprehensive assessment of the artwork...',
  servicesOfferedDescription:
    'We recognize that each piece of fine art requires unique packaging to safeguard its integrity...',
  servicesOfferedListTitle: 'Services Offered',
  servicesOfferedListDescription: [
    {
      title: 'Customized Packaging Solutions',
      description:
        'Our fleet of vehicles is equipped with features designed to guarantee the secure transportation of fine art...',
    },
    {
      title: 'Secure Transportation',
      description:
        'Upon arrival at the destination, our team meticulously unpacks the artworks...',
    },
    {
      title: 'Unpacking and Installation',
      description:
        'At Safe Movers, safety is our priority. We implement stringent safety measures throughout the transportation process...',
    },
  ],
  gallery: ['/fine-art-moving1.jpeg', '/fine-art-moving2.jpeg'],
};

const FineArtMoving = ({ service = defaultService }) => {
  return (
    <section className="flex flex-col px-8 lg:px-24 my-5 mx-auto max-w-7xl items-center">
      <div className="flex gap-12 lg:gap-24 flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <div>
            <div>
              {/* Dynamic title */}
              <h1 className="text-4xl text-gray-500 font-bold my-3">
                {service?.title}
              </h1>
            </div>
            <div>
              <div className="my-7">
                <div>
                  {/* Dynamic cover image */}
                  <img
                    src={service?.coverImage}
                    alt="Safe Movers Fine Art Moving In Kenya"
                  />
                </div>
                <div>
                  {/* Dynamic service description */}
                  <p className="my-4">{service?.serviceDescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              {/* Dynamic expertise section */}
              <div>
                <h2 className="text-2xl my-2 font-bold">
                  {service?.expertiseTitle}
                </h2>
              </div>
              <div>
                <p>{service?.expertiseDescription}</p>
              </div>
            </div>
            <div className="my-7">
              {/* Dynamic services offered section */}
              <div>
                <h2 className="text-2xl font-bold my-2">
                  {service?.servicesOfferedListTitle}
                </h2>
              </div>
              <div>
                <p>{service?.servicesOfferedDescription}</p>
              </div>
              {service?.servicesOfferedListDescription.map((item, index) => (
                <div key={index}>
                  <div>
                    <h2 className="font-bold my-2 text-lg text-gray-500">
                      {item.title}
                    </h2>
                  </div>
                  <div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-7 w-full">
            {/* Dynamic gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center w-full">
              {service?.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Safe Movers Fine Art Moving ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 items-start">
          <div className="w-full">
            <div className="my-7">
              <h2 className="text-2xl font-bold">
                FAQs for Fine Art Moving Services
              </h2>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      1. How do you ensure the safety of fine art pieces during
                      transportation?
                    </AccordionTrigger>
                    <AccordionContent>
                      At Safe Movers, we employ specialized packaging materials
                      and techniques designed explicitly for fine art. Our team
                      meticulously wraps and secures each piece using
                      industry-standard practices to minimize the risk of damage
                      during transit. Additionally, our vehicles are equipped
                      with features that ensure secure transportation,
                      minimizing vibrations and shocks that could potentially
                      harm delicate artworks.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      2. What types of fine art do you handle?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our expertise covers a wide range of fine art, including
                      paintings, sculptures, antiques, delicate glasswork,
                      ceramics, and more. We have experience in handling various
                      mediums and understand the specific care required for each
                      type of artwork.{' '}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      3. Are there size limitations for the artworks you can
                      transport?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, we cater to artworks of various sizes. Our team is
                      equipped to handle large, delicate pieces as well as
                      smaller, more intricate ones. Whether it’s a massive
                      sculpture or a collection of smaller paintings, we ensure
                      their safe transportation.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      4. Do you offer climate-controlled transportation for
                      sensitive artworks?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we understand the importance of maintaining optimal
                      climate conditions for certain artworks. Our specialized
                      packaging includes climate-controlled materials that
                      regulate temperature and humidity, safeguarding the
                      artworks from environmental changes during transit.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      5. How do you handle valuable and fragile items during the
                      moving process?{' '}
                    </AccordionTrigger>
                    <AccordionContent>
                      Our team undergoes extensive training in handling delicate
                      and valuable items. We use cushioning, custom crates, and
                      protective materials to ensure that each piece remains
                      secure and undamaged throughout the journey. Additionally,
                      we supervise every step of the loading, unloading, and
                      transportation process to guarantee the utmost care and
                      attention.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      6. Can you assist with the installation of artworks at the
                      destination?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutely, upon arrival, our team can assist with the
                      unpacking and, if requested, the professional installation
                      of artworks. We ensure that the pieces are positioned
                      according to your specifications and artistic
                      requirements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      7. How should I prepare my fine art pieces for
                      transportation?
                    </AccordionTrigger>
                    <AccordionContent>
                      Before our team arrives, it’s recommended to take
                      inventory and photographs of your artworks. Remove any
                      fragile elements or detachable parts that could be
                      transported separately. Our experts will guide you through
                      any additional preparation steps during the pre-move
                      assessment.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      8. Do you offer international fine art transportation
                      services?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we have experience in international fine art
                      transportation. We can coordinate and facilitate the safe
                      transportation of your artworks across borders, ensuring
                      compliance with international regulations and customs
                      requirements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      9. How far in advance should I schedule my fine art
                      relocation?
                    </AccordionTrigger>
                    <AccordionContent>
                      We recommend contacting us as soon as you know your moving
                      date. This allows us to conduct a thorough assessment of
                      your artworks and tailor our services to meet your
                      specific timeline and requirements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="my-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      10. How are the costs for fine art moving services
                      determined?
                    </AccordionTrigger>
                    <AccordionContent>
                      The pricing for our fine art moving services is based on
                      several factors, including the type and size of the
                      artwork, its fragility, transportation distance, required
                      packaging materials, and any specialized handling
                      instructions. To provide you with an accurate quote, we
                      conduct a thorough assessment of your artworks and tailor
                      our services to meet your specific needs. Our goal is to
                      ensure transparency in pricing while offering competitive
                      rates for our specialized fine art moving services. Please
                      reach out to us for a personalized quote based on your
                      unique requirements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="">
            <OtherServices />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FineArtMoving;
