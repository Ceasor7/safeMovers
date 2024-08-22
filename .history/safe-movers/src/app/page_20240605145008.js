import LandingSection from '@/components/Hero/LandingSection';
import WhyChoose from '@/components/Moving/WhyChoose';
import PostCard from '@/components/PostCard';
import Estimate from '@/components/Quote/Estimate';
import ActualReviews from '@/components/Reviews/ActualReviews';
import CompaniesServed from '@/components/Served/CompaniesServed';
import Membership from '@/sections/Membership';
import ServicesSection from '@/sections/ServicesSection';

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="overflow-x-hidden">
      <section>
        <LandingSection />
      </section>
      <section className="pb-24 px-14 md:px-24 w-full mt-auto mb-auto lg:px-60 max-w-7xl">
        <Estimate />
      </section>
      <section className="relative bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50  rotate-180"
          style={{ backgroundImage: "url('/shipping.jpg')" }}
        ></div>
        <div className="relative">
          <ServicesSection />
        </div>
      </section>
      <section>
        <ActualReviews />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section className="py-24">
        <CompaniesServed />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section>
        <WhyChoose />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section>{/* <GetMoving /> */}</section>
      <section>
        <Membership />
      </section>

      <section className="w-full bg-[#00008b] text-white min-h-content">
        <div className="container flex flex-col py-24 px-8 lg:px-24">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="inline-block font-black text-4xl lg:text-5xl">
                Blog
              </h1>
              <p className="text-2xl">
                All the Latest News in the Moving Industry
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 py-6 sm:gap-x-10 gap-y-7 sm:grid-cols-2">
            {posts?.length > 0 &&
              posts?.map((post) => <PostCard key={post?._id} post={post} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
