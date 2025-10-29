import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { PartnersSection } from "./sections/PartnersSection";

export const HomeScreen = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white">
      <IntroductionSection />
      <HomeHeroSection />
      <PartnersSection />
      <HowItWorksSection />
      <FooterSection />
    </div>
  );
};
