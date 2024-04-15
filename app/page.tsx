import TopBanner from "@/components/banner/TopBanner";
import CTABanner from "@/components/ctaBanner/CTABanner";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import SecondSection from "@/components/second-section/SecondSection";

export default function Home() {
  return (
    <>
      <TopBanner />
      <CTABanner />
      <Header />
      <Hero />
      <SecondSection/>
    </>
  );
}
