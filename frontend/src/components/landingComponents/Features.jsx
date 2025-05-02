import React from 'react';
import { FiCheckCircle, FiThumbsUp, FiSearch } from 'react-icons/fi';

const Features = () => {
  return (
    <section className="py-16 px-3 " id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-semibold text-green-700 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FiCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Smart Waste Detection</h3>
            <p className="mt-2 text-gray-600">Our AI-powered system automatically detects and categorizes waste materials for proper disposal.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FiThumbsUp />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Eco-Friendly Suggestions</h3>
            <p className="mt-2 text-gray-600">Get eco-friendly disposal recommendations for your waste, helping you reduce your carbon footprint.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FiSearch />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Instant Feedback</h3>
            <p className="mt-2 text-gray-600">Receive instant feedback on whether your waste is recyclable, compostable, or should go to the trash.</p>
          </div>
        </div>

        <div className="mt-10">
          <a href="#download" className="inline-block bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-200">
            Explore More Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
