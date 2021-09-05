import React from "react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import NavigationSection from "../components/organisms/NavigationSection";
import StaySection from "../components/organisms/StaySection";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const isNavigationVisible = useSelector((state) => state.ui.isMenuVisible);
  return (
    <React.Fragment>
      <AnimatePresence>{isNavigationVisible && <NavigationSection />}</AnimatePresence>
      <Navbar />
      <StaySection />
      <Footer />
    </React.Fragment>
  );
}
