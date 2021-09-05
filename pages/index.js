import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import NavigationSection from "../components/organisms/NavigationSection";
import StaySection from "../components/organisms/StaySection";
import { useSelector } from "react-redux";
import { animate, AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const isNavigationVisible = useSelector((state) => state.ui.isMenuVisible);
  return (
    <>
      <AnimatePresence>{isNavigationVisible && <NavigationSection />}</AnimatePresence>
      <Navbar />
      <StaySection />
      <Footer />
    </>
  );
}
