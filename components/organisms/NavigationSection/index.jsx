import React from "react";
import GuestSection from "./GuestSection";
import LocationSection from "./LocationSection";
import { useSelector, useDispatch } from "react-redux";
import { filterAction } from "../../../store/filter-silce";
import { uiAction } from "../../../store/ui-slice";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationSection() {
  const dispatch = useDispatch();
  const guestsValue = useSelector((state) => state.filter.guests);
  const locationValue = useSelector((state) => state.filter.location);
  const staysLocation = useSelector((state) => state.filter.staysLocation);

  // Animating stuff
  const navbarVariant = {
    initial: {
      y: "-100vh",
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 30,
    },
  };

  const backDropVariant = {
    initial: {
      y: "100vh",
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 30,
    },
  };
  // end animating stuff

  const hiddenNavigationMenu = () => {
    dispatch(uiAction.hideMenu());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const filterLocation = staysLocation.filter((item) => {
      if (locationValue.length && guestsValue > 1) {
        return item.city === locationValue && item.maxGuests === guestsValue;
      }
      if (locationValue.length && guestsValue === 1) {
        return item.city === locationValue;
      }
    });
    dispatch(filterAction.filterStaysLocation(filterLocation));
    dispatch(uiAction.hideMenu());
  };
  return (
    <React.Fragment>
      <motion.section
        variants={navbarVariant}
        transition={navbarVariant.transition}
        initial={navbarVariant.initial}
        animate={navbarVariant.animate}
        exit={navbarVariant.initial}
        className="min-w-full fixed z-50 top-0 filter drop-shadow-lg"
      >
        <div className="bg-white relative z-50">
          <form
            onSubmit={submitHandler}
            className="w-11/12 lg:w-10/12 mx-auto pt-16 pb-24 lg:flex gap-x-2 bg-white relative z-50"
          >
            <LocationSection />
            <GuestSection />
          </form>
        </div>
      </motion.section>
      <motion.div
        variants={backDropVariant}
        initial={backDropVariant.initial}
        transition={backDropVariant.transition}
        animate={backDropVariant.animate}
        exit={backDropVariant.initial}
        onClick={hiddenNavigationMenu}
        className="min-h-screen fixed min-w-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 10 }}
      ></motion.div>
    </React.Fragment>
  );
}
