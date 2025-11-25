import React from "react";
import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";
import Categories from "./components/Categories";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
// import PromoImages from "./components/PromoImages";
import PromoImagesLeft from "./components/PromoImagesLeft";
import PromoImagesRight from "./components/PromoImagesRight";
import Hero from "./components/Hero";
import TestimonialSlider from "./components/TestimonialSlider";
import CounterStats from "./components/CounterStats";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa"; // ✅ Make sure this import exists
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from "./components/About";
import SectionWrapper from "./components/SectionWrapper";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="main bg-gray-50 text-gray-900">
      <>
      <ScrollProgress />
      {/* Navigation */}
      <Navbar />
      {/* <CarouselBanner /> */}
      <Hero/>
      <About/>
      {/* Categorized Playlist Section */}
      <SectionWrapper className="bg-yellow-50">
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Categories />
        </div>
      </section>
      </SectionWrapper>
      {/* Team Section */}
      <SectionWrapper className="bg-gray-100">
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Profiles />
        </div>
      </section>
      </SectionWrapper>
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
        
          <TestimonialSlider />
        </div>
      </section>
      <SectionWrapper>
       <CounterStats/>
       </SectionWrapper>
       <SectionWrapper>
       <Contact/>
       </SectionWrapper>
       <SectionWrapper>
       <Footer/>
       </SectionWrapper>
       </>
    </div>
  );
}
