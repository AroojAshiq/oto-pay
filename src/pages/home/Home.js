import React from "react";
import Navbar from "@/components/landingPage/Navbar";
import Navbar2 from "@/components/landingPage/Navbar2";
import HeroSection from "@/components/landingPage/HeroSection";
import BrowseProperties from "@/components/landingPage/BrowseProperties";
import OtoProjects from "@/components/landingPage/OtoProjects";
import Papular from "@/components/landingPage/Papular";
import HomePartner from "@/components/landingPage/HomePartner";
import Footer from "@/components/landingPage/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <HeroSection />
      <BrowseProperties />
      <OtoProjects />
      <Papular />
      <HomePartner />
      <Footer />
    </div>
  );
}
