const OurStory = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div>
        <div className=" flex flex-col md:flex-row sm:gap-x-10 gap-y-9 px-8 lg:px-24">
          <div className="flex flex-col justify-center items-left">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>

            <p className="mt-4">
              Moving is a complex task requiring physical strength and a sound
              mind. At SafeMovers, we recognize the importance of people. We
              create a positive atmosphere, defining a mover as a multi-skilled
              professional adept at packing, handling, transportation, and
              setup.
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c-6Dm22bvA8?si=Er26gEZzIEaAieRH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
