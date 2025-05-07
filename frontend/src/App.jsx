import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import bgBanner from './assets/main-bg.png';
import Loader from './components/utils/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a small delay before loading content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s delay for smooth UX

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className="w-screen h-screen relative">
      {/* Background Image */}
      <main
        style={{ backgroundImage: `url(${bgBanner})` }}
        className="w-full h-full bg-cover bg-center bg-no-repeat relative"
      >
        {/* Loader Overlay */}
        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Loader />
          </div>
        )}

        {/* Main Content */}
        {!loading && <Landing />}
      </main>
    </div>
  );
};

export default App;
