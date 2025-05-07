import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is BinBuddy free to use?",
    answer: "Yes! BinBuddy is completely free for all users.",
  },
  {
    question: "What kinds of waste can BinBuddy recognize?",
    answer: "We support recyclables, compostables, hazardous waste, and landfill items using AI.",
  },
  {
    question: "Does BinBuddy store my data?",
    answer: "Yes we may collect some of your data to improve our services but we do not share it with third parties.",
  },
  {
    question: "Can I use BinBuddy in any location?",
    answer: "Yes, but local waste rules may vary. We aim to support region-specific info soon.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 md:my-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl text-green-700 font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-7xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-600">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-4 h-4 text-green-600" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.p
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 mt-4 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
