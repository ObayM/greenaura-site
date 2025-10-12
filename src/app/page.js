import HeroSection from "@/components/Hero";
import PartneredByCarousel  from "@/components/Carousel";
import { LOGOS } from "@/lib/partners-logos";
import AboutUsSection from "@/components/About";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <div className="bg-gradient-to-b from-green-50 to-green-100 py-12 h-76 flex flex-col justify-between items-center">
        <h1 className="mt-4 mb-8 text-4xl font-bold text-white md:text-6xl flex justify-center items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
            Trusted by the Best
          </span>
        </h1>


      <div className="flex flex-col gap-8">
        <PartneredByCarousel logos={LOGOS} speed="fast" direction="left" />
      </div>
  </div>
    <AboutUsSection/>
    </>
  );
}
