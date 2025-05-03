import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import {HiCog} from 'react-icons/hi';
import { Link } from 'react-router-dom';

//images

import waste1 from '../../assets/landing/waste-1.jpg';
import waste2 from '../../assets/landing/waste-2.jpg';
import waste3 from '../../assets/landing/waste-3.jpg';

const slides = [
  {
    id: 1,
    title: 'Detect Waste Instantly',
    text: 'Use our AI-powered API to identify recyclable, compostable, or landfill items in real time.',
    image: waste1,
  },
  {
    id: 2,
    title: 'Improve Sustainability',
    text: 'Help users make better disposal decisions through real-time waste classification.',
    image: waste2
  },
  {
    id: 3,
    title: 'Auto suggest waste disposal points',
    text: 'Easily locate nearby recycling centers or composting facilities based on your location.',
    image: waste3,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  return (
    <div className=" w-full h-auto my-10 overflow-hidden" id='home'>
      <div className=" md:px-[3.2rem] py-5 md:py-[2rem]" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className=" md:ml-28 inline-flex items-center gap-2 bg-yellow-100 border border-green-300 text-green-800 text-sm font-semibold px-4 py-1 rounded-full shadow-md z-10"
      >
        <HiCog className="animate-spin-slow text-green-600" />
        Building in Progress
      </motion.div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-26 gap-10">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-[4rem] font-bold text-white mb-4">{slides[current].title}</h1>
          <p className="text-lg text-white mb-6">{slides[current].text}</p>
          <Link to='/signup' className='inline-flex items-center '>
            <button className="bg-green-600 hover:bg-green-800 transition cursor-pointer text-white px-5 py-3 rounded-sm ">
              Get Started
            </button>
            <button className="bg-green-600 hover:bg-green-800 transition cursor-pointer text-white px-5 py-4 rounded-lg">
              <FaChevronRight />
            </button>
          </Link>

          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            {/* You requested to keep these exactly as-is */}
            <FaChevronLeft
              onClick={handlePrev}
              className="w-10 h-10 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full hover:bg-white/60 transition cursor-pointer"
            />
            <FaChevronRight
              onClick={handleNext}
              className="w-10 h-10 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full hover:bg-white/60 transition cursor-pointer"
            />
          </div>
        </motion.div>

        <motion.img
          key={slides[current].image}
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-[300px] max-w-md rounded-xl shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
};

export default Hero;
