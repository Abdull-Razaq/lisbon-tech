import React from 'react';

const RightPanel = () => {
  return (
    <div className="hidden relative w-1/2 h-screen lg:flex items-center justify-center bg-gray-200">
      {/* Apply the bounce animation here */}
      <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce" />
      <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
    </div>
  );
};

export default RightPanel;
