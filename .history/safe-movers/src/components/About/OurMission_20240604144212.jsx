import MVC from './MVC';

const OurMission = () => {
  return (
    <section className="bg-neutral-700">
      <div className=" py-14 mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:gap-x-5">
          <div className="flex justify-center overflow-hidden rounded-lg items-center">
            <img alt="" src="/auto-image-carousel.jpg" className=" h-80 w-80" />
          </div>

          <div className="flex justify-center items-center">
            <MVC />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
