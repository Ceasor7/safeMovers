import MVC from './MVC';

const OurMission = () => {
  return (
    <section className="bg-neutral-700">
      <div>
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
