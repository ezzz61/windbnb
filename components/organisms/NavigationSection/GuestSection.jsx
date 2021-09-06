import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterAction } from "../../../store/filter-silce";
import { uiAction } from "../../../store/ui-slice";
import IncreaseGuest from "./IncreaseGuest";
import { motion } from "framer-motion";

export default function GuestSection() {
  const isGuestActive = useSelector((state) => state.ui.isGuestActive);
  const value = useSelector((state) => state.filter.guests);
  const active = isGuestActive ? "border-gray-700" : "border-white";
  const dispatch = useDispatch();

  const guestActiveHandler = () => {
    dispatch(uiAction.hideLocationMenu());
    dispatch(uiAction.visibleGuestMenu());
  };

  const inputHandler = (e) => {
    if (e.target.value < 11) {
      dispatch(filterAction.inputGuests(e.target.value));
    }
  };

  return (
    <div onClick={guestActiveHandler} className="lg:w-7/12 transition-all">
      <div className="shadow-xl rounded-3xl flex items-center transition-all">
        <div className={`w-7/12 rounded-3xl px-8 py-2 border-2 ${active}`}>
          <h1 className="text-sm font-bold">GUESTS</h1>
          <div className="">
            <input onChange={inputHandler} type="number" value={value} min={1} max={8} className="h-8 w-1/12" />
            <span>guests</span>
          </div>
        </div>
        <div className="w-5/12 flex justify-center">
          <button className="bg-red-400 text-white flex py-4 px-6  lg:py-4 lg:px-10 rounded-2xl">
            <img src="/icons/search-icon.svg" alt="" />
            <p>Search</p>
          </button>
        </div>
      </div>
      {isGuestActive && (
        <React.Fragment>
          <IncreaseGuest title="Adult" desc="Ages 13 or above" type="adult" />
          <IncreaseGuest title="Childern" desc="Ages 2-12" type="kid" />
        </React.Fragment>
      )}
    </div>
  );
}
