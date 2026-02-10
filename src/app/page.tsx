import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatGodDid from "@/components/WhatGodDid";
import Testimonials from "@/components/Testimonials";
import OnlineToPresencial from "@/components/OnlineToPresencial";
import VideoGallery from "@/components/VideoGallery";
import Speakers from "@/components/Speakers";
import ShirtSection from "@/components/ShirtSection";
import Location from "@/components/Location";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatGodDid />
        <Testimonials />
        <OnlineToPresencial />
        <VideoGallery />
        <Speakers />
        <ShirtSection />
        <Location />
        <Registration />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
