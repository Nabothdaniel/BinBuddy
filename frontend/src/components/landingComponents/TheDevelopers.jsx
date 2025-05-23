import React from "react";
import { motion } from "framer-motion";
//images

import Img1 from "../../assets/landing/developer.jpg"
import { Link } from "react-router-dom";
import { cardVariants } from "../../utils/constants";

const developers = [
  {
    name: "Daniel Naboth",
    role: "Full Stack Developer",
    github: "https://github.com/Nabothdaniel",
    image: Img1
  },
  {
    name: "Yahaya Abubakar",
    role: "Frontend Developer",
    github: "https://github.com/Nabothdaniel",
    image: Img1
  },
  {
    name: "Umeke Godwin",
    role: "Backend Developer",
    github: "https://github.com/Nabothdaniel",
    image: Img1
  },
  // Add more developers as needed
];

const Developers = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10 md:py-10 px-4" id="developers">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-green-700 mb-4">Meet the Developers</h1>
          <p className="text-gray-600 mb-10">
            The minds behind BinBuddy – building smarter waste solutions for a cleaner world.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 py-16">
          {developers.map((dev, index) => (
            <motion.div
              to={dev.github}
              key={index}

              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Link className="bg-white rounded-xl shadow-md overflow-hidden group transition hover:shadow-xl"
              >
                <div className="relative h-48">
                  <img
                    src={dev.image}
                    alt={`${dev.name}'s avatar`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl hover:text-green-400 transition"
                      aria-label={`GitHub profile of ${dev.name}`}
                    >
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">{dev.name}</h2>
                  <p className="text-sm text-gray-500">{dev.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
