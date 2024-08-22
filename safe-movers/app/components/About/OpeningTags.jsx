const OpeningTags = ({title1, title2, description}) => {
  return (
    <section className="w-full bg-neutral-200 relative py-8">
      <div className="mx-auto max-w-screen-7xl px-8 lg:px-24 py-12">
        <div className="mx-auto  text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {title1}
            <strong className="font-extrabold text-[#CC5500] sm:block">
              {' '}
              {title2}{' '}
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 animate-bounce text-[#CC5500]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M12 5V19M12 19L6 13M12 19L18 13"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default OpeningTags;
