import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function StaySection() {
  const staysLocation = useSelector((state) => state.filter.filtredLocation);

  return (
    <section className="w-11/12 lg:w-10/12 mx-auto mt-20 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-600">Stays in Finland</h1>
        <span className="text-gray-600 text-lg">12+ stays</span>
      </div>
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
        {staysLocation.length === 0 && <h1>Not found</h1>}
        {staysLocation.map((item) => (
          <Card
            key={Math.random()}
            superHost={item.superHost}
            img={item.photo}
            title={item.title}
            type={item.type}
            rating={item.rating}
          />
        ))}
      </section>
    </section>
  );
}
