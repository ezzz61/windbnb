import React, { useState } from "react";
import LocationItem from "./LocationItem";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../store/ui-slice";
import { filterAction } from "../../../store/filter-silce";

export default function LocationSection() {
  const locationValue = useSelector((state) => state.filter.location);
  const isLocationActive = useSelector((state) => state.ui.isLocationActive);
  const isActive = isLocationActive ? "border-gray-500" : "border-white";
  const dispatch = useDispatch();

  const locationActiveHandler = () => {
    dispatch(uiAction.hideGuestMenu());
    dispatch(uiAction.visibleLocationMenu());
  };

  const inputHandler = (e) => {
    dispatch(filterAction.setLocationValue(e.target.value));
  };

  return (
    <div className="lg:w-5/12">
      <div className={`border-2 px-8 py-2 ${isActive} shadow-xl rounded-3xl mb-8`}>
        <h1 className="font-bold text-sm">LOCATION</h1>
        <input
          onChange={inputHandler}
          onClick={locationActiveHandler}
          className="outline-none h-8 w-full"
          type="text"
          value={locationValue}
          placeholder="Add location"
        />
      </div>
      {isLocationActive && (
        <>
          <LocationItem location="Helsinki" />
          <LocationItem location="Turku" />
          <LocationItem location="Oulu" />
          <LocationItem location="Vaasa" />
        </>
      )}
    </div>
  );
}
