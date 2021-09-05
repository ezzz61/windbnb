import React from "react";
import { motion } from "framer-motion";

export default function Card(props) {
  const { img, type, title, rating, superHost } = props;
  return (
    <div className="width-card">
      <figure className="overflow-hidden rounded-3xl h-60">
        <img src={img} alt="" />
      </figure>
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-x-2">
          {superHost && (
            <p className="border-2 border-gray-600 text-gray-600 px-2 lg:px-3 font-bold py-2 text-sm rounded-2xl">
              SUPER HOST
            </p>
          )}
          <h1 className="text-md text-gray-400">{type}</h1>
        </div>
        <span className="flex items-center gap-x-2">
          <img src="/icons/star.svg" alt="" />
          <p>{rating}</p>
        </span>
      </div>
      <h4 className="text-lg font-semibold mt-4 text-gray-600">{title}</h4>
    </div>
  );
}
