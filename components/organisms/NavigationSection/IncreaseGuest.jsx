import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../../store/filter-silce";

export default function IncreaseGuest({ title, desc, type }) {
  let value;
  if (type === "adult") value = useSelector((state) => state.filter.adult);
  if (type === "kid") value = useSelector((state) => state.filter.kid);

  const dispatch = useDispatch();

  const increase = () => {
    if (type === "adult") {
      dispatch(filterAction.increase("adult"));
    }
    if (type === "kid") {
      dispatch(filterAction.increase("kid"));
    }
  };
  const decrease = () => {
    if (type === "adult") {
      dispatch(filterAction.decrease("adult"));
    }
    if (type === "kid") {
      dispatch(filterAction.decrease("kid"));
    }
  };

  return (
    <div className="ml-4 mt-12">
      <h1 className="font-bold">{title}</h1>
      <p className="text-gray-300">{desc}</p>
      <div className="mt-4">
        <span
          onClick={decrease}
          className="text-xl border-2 border-gray-300 px-2 rounded-md cursor-pointer select-none text-gray-300"
        >
          -
        </span>
        <span className="px-6">{value}</span>
        <span
          onClick={increase}
          className="text-xl border-2 border-gray-300 px-2 rounded-md cursor-pointer select-none text-gray-300"
        >
          +
        </span>
      </div>
    </div>
  );
}
