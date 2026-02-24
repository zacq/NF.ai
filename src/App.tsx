import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwoGrowthEngines from "./components/TwoGrowthEngines";
import TrustedTeams from "./components/TrustedTeams";
import ProblemSection from "./components/ProblemSection";
import SystemArchitecture from "./components/SystemArchitecture";
import YouTubeSection from "./components/YouTubeSection";
import FloatingChatWidget from "./components/FloatingChatWidget";
import Footer from "./components/Footer";
import Academy from "./components/Academy";

import BookingModal from "./components/BookingModal";
import PricingModal from "./components/PricingModal";
import SalesPricingModal from "./components/SalesPricingModal";

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Listen for hash changes
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    // Also check hash on load
    setCurrentHash(window.location.hash);

    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest('a, button');
      if (!closestLink) return;

      const text = closestLink.textContent?.trim() || "";
      const bookingTriggers = [
        "Book a Call",
        "Book Your Strategy Call",
        "Book a Strategy Call",
        "Book Demo",
        "Get Started Free",
        "Start Pro Trial",
        "Request Callback"
      ];

      if (bookingTriggers.some(trigger => text.includes(trigger))) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  // Render Academy page for #/academy hash
  if (currentHash === '#/academy' || currentHash === '#academy') {
    return <Academy />;
  }

  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <TwoGrowthEngines />
      <TrustedTeams />
      <ProblemSection />
      <SystemArchitecture />
      <YouTubeSection />
      <Footer />
      <FloatingChatWidget />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <PricingModal />
      <SalesPricingModal />
    </div>
  );
}
