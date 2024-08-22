import MakeSpecial from '@/components/About/MakeSpecial';
import OpeningTags from '@/components/About/OpeningTags';
import OurMission from '@/components/About/OurMission';
import OurStory from '@/components/About/OurStory';
import Estimate from '@/components/Quote/Estimate';

const AboutUs = () => {

  const title1 = 'Seamless Moving, Near or Far:'
  const title2 = 'Kenya\u0027s Trusted Choice.'
  const description = 'Moving is a complex task requiring physical strength and a sound mind. At SafeMovers, we recognize the importance of people.We create a positive atmosphere, defining a mover as a multi - skilled professional adept at packing, handling, transportation, and setup.'

  return (
    <div>
      <section>
        <OpeningTags title1={title1} title2={title2} description={description}/>
      </section>
      <section>
        <OurMission />
      </section>
      <section className='py-24'>
        <OurStory />
      </section>
      <section>
        <MakeSpecial />
      </section>
      <section className="pb-24 px-6 md:px-12 w-full">
        <Estimate />
      </section>
    </div>
  );
};

export default AboutUs;
