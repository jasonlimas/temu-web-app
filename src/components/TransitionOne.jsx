import React from 'react';

const TransitionOne = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="h-screen bg-primary"></div>
      <div
        className="h-screen absolute inset-0 z-10 bg-secondary"
        style={{
          transform: "skewY(-5deg)",
          transformOrigin: "top left",
        }}
      ></div>
    </div>
  );
};

export default TransitionOne;