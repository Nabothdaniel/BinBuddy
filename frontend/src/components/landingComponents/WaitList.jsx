import { useState } from 'react';

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="bg-green-50 flex flex-col md:flex-row justify-center items-center px-4 py-10 max-w-7xl mx-auto">
      
      {/* Left Side Text */}
      <div className="md:w-1/2 mb-8 md:mb-0 md: text-center md:text-left">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Be Part of the BinBuddy Movement
        </h1>
        <p className="text-gray-700 text-lg">
          Our AI-powered assistant helps you sort your waste better and protect the environment.
          Join the waitlist and be among the first to make waste management smarter!
        </p>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2  w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Join the Waitlist</h2>
        <p className="text-gray-600 mb-6">
          Get early access to BinBuddy when we launch.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="text-green-700 font-medium">
            🎉 Thanks for joining the waitlist! We'll keep you posted.
          </div>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
