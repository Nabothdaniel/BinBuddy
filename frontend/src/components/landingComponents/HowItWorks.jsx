import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-16 px-3 md:px-10" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-green-700 text-4xl mb-[3rem]"
        >
          How BinBuddy Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ // Card Content Array
            {
              step: 1,
              title: "Snap a Photo",
              desc: "Take a picture of the item you want to sort. Our app can handle all types of waste materials with ease.",
            },
            {
              step: 2,
              title: "AI Detects",
              desc: "Our AI instantly processes the image and identifies the material—whether it’s recyclable, compostable, or trash.",
            },
            {
              step: 3,
              title: "Sort Confidently",
              desc: "Get instant feedback on where to dispose of your item—recycle, compost, or trash—helping you make eco-friendly decisions.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.step}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">{card.step}</span>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            to="/signup"
            className="inline-block bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-200"
          >
            Try It Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
