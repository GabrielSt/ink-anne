import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import StylesSection from "../components/sections/StylesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import FlashTeaserSection from "../components/sections/FlashTeaserSection";
import PokedexTeaserSection from "../components/sections/PokedexTeaserSection";
import WishlistTeaserSection from "../components/sections/WishlistTeaserSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import StudioSection from "../components/sections/StudioSection";
import BookingCTASection from "../components/sections/BookingCTASection";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Home() {
  useScrollToTop()
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StylesSection />
        <PortfolioSection />
        <FlashTeaserSection />
        <PokedexTeaserSection />
        <WishlistTeaserSection />
        <TestimonialsSection />
        <StudioSection />
        <BookingCTASection />
      </main>
      <Footer />
    </>
  );
}
