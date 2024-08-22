import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <header className="z-10 sticky top-0 w-full my-7 sm:my-0 flex sm:border-b sm:border-border bg-white">
      <div className="container max-w-screen-2xl sm:justify-center flex flex-col">
        <div className="flex flex-row sm:gap-x-20 sm:my-4 h-14 max-w-screen-2xl mx-auto">
          <div>
            <img
              src="/safe-movers-logo-1.png"
              className="h-12 w-32 sm:h-auto sm:w-auto"
              alt="Safe Movers Logo"
            />
          </div>
          <div className="flex-row hidden sm:inline-flex sm:gap-x-4">
            <Link
              href="/"
              className="hover:text-[#00008B] hover:border-b-2 hover:border-[#00008B]"
            >
              {' '}
              Home
            </Link>
            <Link
              href="/about-us"
              className="hover:text-[#00008B] hover:border-b-2 hover:border-[#00008B]"
            >
              {' '}
              About Us
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#00008B] hover:border-b-2 hover:border-[#00008B]"
            >
              {' '}
              Blog
            </Link>
            <Link
              href="/safe-movers-shop"
              className="hover:text-[#00008B] hover:border-b-2 hover:border-[#00008B]"
            >
              {' '}
              Shop
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#00008B] hover:border-b-2 hover:border-[#00008B]"
            >
              {' '}
              Contact
            </Link>
          </div>
          <div className=" hidden lg:inline-flex">
            <Link
              href="/free-quote"
              className=" px-5 py-3 text-white rounded-xl ml-24 bg-[#00008B] hover:bg-[#00008B] hover:-translate-x-1.5 duration-400 "
            >
              {' '}
              Get a Free Quote{' '}
            </Link>
          </div>
        </div>
        <hr className=" hidden sm:inline-flex" />
        <div className="container hidden lg:inline-flex flex-row sm:gap-x-14 sm:my-2 h-14 max-w-screen-2xl items-center justify-center bg-[#00008B] hover:bg-transparent hover:text-black text-white rounded-xl">
          <Link
            href="/residential"
            className="hover:text-[#CC5500] hover:border-b-2 hover:border-[#00008B]"
          >
            Residential Moving
          </Link>
          <Link
            href="/coorporate-movers"
            className="hover:text-[#CC5500] hover:border-b-2  hover:border-[#00008B]"
          >
            Corporate/ Office Moving
          </Link>
          <Link
            href="/international-movers"
            className="hover:text-[#CC5500] hover:border-b-2 hover:border-[#00008B]"
          >
            International Moving
          </Link>
          <Link
            href="/storage"
            className="hover:text-[#CC5500] hover:border-b-2 hover:mt-1 hover:border-[#00008B]"
          >
            Storage Services
          </Link>
          <Link
            href="/services"
            className="hover:text-[#CC5500] hover:border-b-2 hover:mt-1 hover:border-[#00008B]"
          >
            Other Services
          </Link>
        </div>
      </div>
      <MobileNav />
    </header>
  );
};

export default Navbar;
