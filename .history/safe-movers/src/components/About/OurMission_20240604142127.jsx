import MVC from './MVC';

const OurMission = () => {
  return (
    <section className="bg-neutral-700">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/auto-image-carousel.jpg"
              className=" h-80 w-full"
            />
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
