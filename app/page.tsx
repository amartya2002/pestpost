import TopBanner from "@/components/banner/TopBanner";
import Card from "@/components/card-layout/card";
import ScrollCardServices from "@/components/card-layout/services-scroll-card";
import CTABanner from "@/components/ctaBanner/CTABanner";
import FooterCTA from "@/components/footer-cta/FooterCTA";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import PestLibrarySection from "@/components/pest-library/pest-lib-section";
import SecondSection from "@/components/second-section/SecondSection";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <TopBanner />
      <CTABanner />
      <Header />
      <Hero />
      <SecondSection/>
      <ScrollCardServices/>
      <PestLibrarySection/>
      <Testimonials/>
      <FooterCTA/>
    </>
  );
}
