import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../../store/filter-silce.js";
import { uiAction } from "../../../store/ui-slice.js";

export default function Navbar() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.filter.location);
  const guests = useSelector((state) => state.filter.guests);
  const showNavigationMenu = () => {
    dispatch(uiAction.visibleMenu());
  };

  const resetFilter = () => {
    dispatch(filterAction.resetFilter());
  };

  return (
    <header className="w-11/12 lg:w-10/12 mx-auto pt-8 md:flex justify-between items-center">
      <span onClick={resetFilter} className="cursor-pointer">
        <img src="/icons/logo.svg" alt="" />
      </span>
      <nav className="flex items-center py-5 shadow-md rounded-2xl mt-4 md:mt-0">
        <h1 className="border-r-2 px-6 text-gray-600">
          {location.length ? `${location}, Finland` : "Helsinki, Finland"}
        </h1>
        <button onClick={showNavigationMenu} className="border-r-2 px-6 text-gray-400">
          {guests > 1 ? `${guests} guests` : "Add guests"}
        </button>
        <img className="px-6" src="/icons/search-icon-red.svg" alt="" />
      </nav>
    </header>
  );
}
