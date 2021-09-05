import React from "react";
import { useDispatch } from "react-redux";
import { filterAction } from "../../../store/filter-silce";

export default function LocationItem({ location }) {
  const dispatch = useDispatch();
  const setLocationValue = () => {
    dispatch(filterAction.setLocation(location));
  };

  return (
    <div className="ml-6 flex items-center mt-8 cursor-pointer">
      <img width={28} src="/icons/location-icon.svg" alt="location-icon" />
      <span onClick={setLocationValue} className="ml-2">
        {location}, Finland
      </span>
    </div>
  );
}
