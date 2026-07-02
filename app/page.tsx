import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { InsuranceNetworks } from "@/components/home/InsuranceNetworks";
import { WhyUs } from "@/components/home/WhyUs";
import { AboutProcess } from "@/components/home/AboutProcess";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <WhoWeServe />
      <InsuranceNetworks />
      <WhyUs />
      <AboutProcess />
      <FinalCta />
    </>
  );
}
