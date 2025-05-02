import {useState} from 'react';
const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'd send this to your backend or service like Mailchimp, etc.
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className=" bg-green-50 flex flex-col justify-center items-center px-4 py-">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Join the BinBuddy Waitlist</h1>
        <p className="text-gray-600 mb-6">
          Be the first to get access to our AI-powered waste sorting assistant.
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
