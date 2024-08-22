import SubscriptionForm from './SubscriptionForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-24">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded bg-[#00008b] lg:block"></span>
              <div>
                <h2 className="text-2xl font-medium text-gray-900">
                  Request a Meeting
                </h2>

                <p className="mt-4 max-w-lg">
                  Moving is a complex task requiring physical strength and a
                  sound mind. At SafeMovers, we recognize the importance of
                  people. We create a positive atmosphere, defining a mover as a
                  multi-skilled professional adept at packing, handling,
                  transportation, and setup.
                </p>
              </div>

              <SubscriptionForm />
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden lg:block">
              <img
                src="/safe-movers-logo-1.png"
                className=" h-16 w-36 mb-5 sm:h-auto sm:w-auto"
                alt="Safe Movers Logo"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-medium">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {' '}
                      Vehicle Relocation{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      Machinery Moving{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      Cross-Border Moving in East Africa{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      Furniture Installation & Assembly Services in Kenya{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      Fine Art Moving{' '}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium ">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {' '}
                      About{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      {' '}
                      Our Team{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      Sitiri Insuarance{' '}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium ">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      Contact{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      FAQs{' '}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {' '}
                      Live Chat{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {' '}
                    Terms & Conditions{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {' '}
                    Privacy Policy{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    {' '}
                    Cookies{' '}
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs">
                &copy; {currentYear} Creative Age. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
