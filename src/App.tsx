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
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("nf-theme");
    const dark = saved !== "light";
    // Apply class immediately so there's no flash on reload
    if (!dark) document.documentElement.classList.add("light");
    return dark;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("light", !next);
      localStorage.setItem("nf-theme", next ? "dark" : "light");
      return next;
    });
  };

  const openBooking = () => setIsModalOpen(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Listen for hash changes
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    setCurrentHash(window.location.hash);

    // Custom event for components that can't use props (e.g. Navbar)
    const handleBookingEvent = () => setIsModalOpen(true);
    window.addEventListener('open-booking-modal', handleBookingEvent);

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
        "Request Callback",
        "Initiate Strategy Call",
        "Start Implementation",
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
      window.removeEventListener('open-booking-modal', handleBookingEvent);
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  const isAcademy = currentHash === '#/academy' || currentHash === '#academy';

  return (
    <>
      {isAcademy ? (
        <Academy onBookingClick={openBooking} />
      ) : (
        <div className="min-h-screen bg-brand-navy text-white overflow-x-hidden">
          <Navbar scrolled={scrolled} onBookingClick={openBooking} isDark={isDark} onToggleTheme={toggleTheme} />
          <Hero />
          <TwoGrowthEngines />
          <TrustedTeams />
          <ProblemSection />
          <SystemArchitecture />
          <YouTubeSection />
          <Footer />
          <FloatingChatWidget />
        </div>
      )}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <PricingModal />
      <SalesPricingModal />
    </>
  );
}
