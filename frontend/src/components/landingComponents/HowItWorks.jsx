import { Link } from "react-router-dom";
const HowItWorks = () => {
  return (
    <section className="py-16 px-3 md:px-10  " id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" font-semibold text-green-700 text-4xl mb-[3rem]">How BinBuddy Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Snap a Photo</h3>
            <p className="mt-2 text-gray-600">Take a picture of the item you want to sort. Our app can handle all types of waste materials with ease.</p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">AI Detects</h3>
            <p className="mt-2 text-gray-600">Our AI instantly processes the image and identifies the material—whether it’s recyclable, compostable, or trash.</p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Sort Confidently</h3>
            <p className="mt-2 text-gray-600">Get instant feedback on where to dispose of your item—recycle, compost, or trash—helping you make eco-friendly decisions.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/signup" className="inline-block bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-200">
            Try It Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
