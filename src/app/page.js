import HeroSection from "@/components/Hero";
import PartneredByCarousel  from "@/components/Carousel";
import { LOGOS } from "@/lib/partners-logos";
import AboutUsSection from "@/components/About";
import ActivitiesSection from "@/components/ActivitesSection";
import FAQSection from "@/components/faq";
import JoinUsSection from "@/components/JoinUs";

import BlogSection from "@/components/blogSection";
import { getPosts } from '@/lib/posts';

import Footer from "@/components/layout/footer";
import ContactUsSection from "@/components/contact-us";

export default async function Home() {

  const allPosts = await getPosts();

  const latestPosts = allPosts.slice(0, 2);

  return (
    <>
    <HeroSection/>
    <div className="bg-gradient-to-b from-green-50 to-lime-100/80 py-12 h-76 flex flex-col justify-between items-center">
        <h1 className="mt-4 mb-8 text-4xl font-bold text-white md:text-6xl flex justify-center items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500">
            Trusted by the Best
          </span>
        </h1>


      <div className="flex flex-col gap-8">
        <PartneredByCarousel logos={LOGOS} speed="fast" direction="left" />
      </div>
  </div>
    <AboutUsSection/>
    <ActivitiesSection/>
    <BlogSection posts={latestPosts} />

    <JoinUsSection/>
    <FAQSection/>

    <ContactUsSection/>
    <Footer/>
    

    </>
  );
}
