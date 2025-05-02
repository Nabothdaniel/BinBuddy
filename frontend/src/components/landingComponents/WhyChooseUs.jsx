import whyChooseUs from "../../assets/landing/img2.jpg";
const WhyChooseUs = () => {
  return (
    <section  className="py-16 md:py-28  shadow-sm" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center px-5">
        <h2 className="text-3xl font-semibold text-green-700 mb-8 md:text-5xl">Why Choose Us?</h2>

        {/* Image and Combined Reason */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <img
            src={whyChooseUs}
            alt="Why Choose Us"
            className="w-full md:w-1/2 h-auto object-contain rounded-lg"
          />
          <div className="md:w-1/2 text-left">
            <h3 className="text-xl md:text-4xl font-semibold text-gray-800">Trusted, Reliable, and Always Available</h3>
            <p className="mt-4 md:text-2xl text-gray-600">
              Our platform offers top-notch security, 24/7 customer support, and a proven track record of delivering reliable results. 
              We’re committed to making your experience seamless, helping you achieve your goals with confidence and ease.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
