import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import bgBanner from './assets/main-bg.png';
import Loader from './components/utils/Loader';  // Import the Loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    document.addEventListener('DOMContentLoaded',()=>{
      setLoading(false)
    })// Call the function to start fetching data
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className="w-screen h-screen relative">
      {/* Background Image */}
      <main
        style={{ backgroundImage: `url(${bgBanner})` }}
        className="w-full h-full bg-cover bg-center bg-no-repeat"
      >
        {/* Show the loader when loading is true */}
        {loading && <Loader />}
        
    
        {/* Landing Page Content */}
        {!loading && <Landing />} {/* Show Landing when loading is false */}
      </main>
    </div>
  );
};

export default App;
