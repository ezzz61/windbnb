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
      <motion.section
        initial={{ x: "100vh" }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 65,
            staggerChildren: 0.1,
          },
        }}
        transition={{ duration: 0.8, type: "spring", staggerChildren: 0.1 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
      >
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
          <div className="width-card">
      <figure className="overflow-hidden rounded-3xl h-60">
        <img src={item.photo} alt="" />
      </figure>
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-x-2">
          {item.superHost && (
            <p className="border-2 border-gray-600 text-gray-600 px-2 lg:px-3 font-bold py-2 text-sm rounded-2xl">
              SUPER HOST
            </p>
          )}
          <h1 className="text-md text-gray-400">{item.type}</h1>
        </div>
        <span className="flex items-center gap-x-2">
          <img src="/icons/star.svg" alt="" />
          <p>{item.rating}</p>
        </span>
      </div>
      <h4 className="text-lg font-semibold mt-4 text-gray-600">{item.title}</h4>
    </div>
        ))}
      </motion.section>
    </section>
  );
}
