const RequestMeeting = () => {
  return (
    <div>
      <form className="mt-6 w-full">
        <label htmlFor="UserEmail" className="sr-only">
          {' '}
          Email{' '}
        </label>

        <div className="rounded-md border border-gray-100 sm:flex sm:items-center sm:gap-4">
          <input
            type="email"
            id="UserEmail"
            placeholder="john@rhcp.com"
            className="w-full border-none sm:text-sm p-2"
          />

          <button className="mt-1 w-full rounded bg-[#00008b] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-[#CC5500] sm:mt-0 sm:w-auto sm:shrink-0">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestMeeting;
