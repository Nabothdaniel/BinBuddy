import React, { useState } from 'react';
import { FiCheckCircle, FiThumbsUp, FiSearch, FiZap, FiMapPin } from 'react-icons/fi';
import { FaRecycle } from 'react-icons/fa';

const Features = () => {
  const [showMore, setShowMore] = useState(false);

  const coreFeatures = [
    {
      icon: <FiCheckCircle />,
      title: 'Smart Waste Detection',
      description: 'Our AI-powered system automatically detects and categorizes waste materials for proper disposal.',
    },
    {
      icon: <FiThumbsUp />,
      title: 'Eco-Friendly Suggestions',
      description: 'Get eco-friendly disposal recommendations for your waste, helping you reduce your carbon footprint.',
    },
    {
      icon: <FiSearch />,
      title: 'Instant Feedback',
      description: 'Receive instant feedback on whether your waste is recyclable, compostable, or should go to the trash.',
    },
  ];

  const extraFeatures = [
    {
      icon: <FiZap />,
      title: 'Energy-Efficient Analysis',
      description: 'Uses minimal processing power for fast and sustainable waste analysis.',
    },
    {
      icon: <FaRecycle />,
      title: 'Recycling Partner Locator',
      description: 'Find local recycling centers or drop-off points based on your location.',
    },
    {
      icon: <FiMapPin />,
      title: 'Waste Tracking History',
      description: 'Track your disposal history and monitor your sustainable habits over time.',
    },
  ];

  return (
    <section className="py-16 md:py-16 px-3" id="Features">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-semibold text-green-700 mb-8">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-green-500 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}

          {showMore &&
            extraFeatures.map((feature, index) => (
              <div
                key={`extra-${index}`}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 animate-fadeIn"
              >
                <div className="text-green-500 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-block bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-200"
          >
            {showMore ? 'Show Less' : 'See More Features'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
