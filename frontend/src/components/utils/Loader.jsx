import React from 'react';

const Loader = () => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="animate-spin rounded-full border-t-4 border-white w-16 h-16"></div>
    </div>
  );
};

export default Loader;
