import MVC from './MVC';

const OurMission = () => {
  return (
    <section className="bg-neutral-700">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col sm:flex-row sm:gap-x-5">
          <div>
            <img alt="" src="/auto-image-carousel.jpg" className=" h-80 w-80" />
          </div>

          <div>
            <MVC />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
