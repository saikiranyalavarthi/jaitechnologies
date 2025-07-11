"use client";
import Image from "next/image";
import ServicesSection from "./components/services";
import WeFixSection from "./components/WeFixSection";
import LaptopQuoteSection from "./components/LaptopQuoteSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CallNowBanner from "./components/CallNowBanner";
import LaptopSolutions from "./components/LaptopSolutions";
import WhyWeAreBest from "./components/WhyWeAreBest";
import QuoteFormWithContact from "./components/QuoteFormWithContact";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}

      <HeroSection />
      {/* Services Grid */}
      <main>
        {/* Other sections... */}
        <ServicesSection />
      </main>

      {/* Perfect For Section */}

      <WeFixSection />
      <LaptopQuoteSection />
      <WhyChooseUs />
      <CallNowBanner />
      <LaptopSolutions />
      <WhyWeAreBest />
      <QuoteFormWithContact />
      {/* Contact Section */}

      {/* Footer */}
    </main>
  );
}
