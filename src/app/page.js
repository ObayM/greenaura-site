import HeroSection from "@/components/home/Hero";

import PartneredByCarousel  from "@/components/Carousel";
import { LOGOS } from "@/lib/partners-logos";

import AboutUsSection from "@/components/home/About";
import ActivitiesSection from "@/components/home/ActivitesSection";
import FAQSection from "@/components/home/faq";
import JoinUsSection from "@/components/home/JoinUs";

import BlogSection from "@/components/blogSection";
import { getPosts } from '@/lib/posts';

import ContactUsSection from "@/components/home/contact-us";

import SmoothScroll from "@/components/layout/SmoothScroll";

export default async function Home() {


  const allPosts = await getPosts();

  const latestPosts = allPosts.slice(0, 2);

  return (
    <SmoothScroll >
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
    

    </SmoothScroll>
  );
}
