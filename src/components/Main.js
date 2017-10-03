import React from 'react';

const Main = () => {
  return (
    <div className="main-wrapper">
      <video
        playsInline
        autoPlay
        muted
        loop
        id="bgvid"
        src="Perfect_Hour.mp4"
      />
    </div>
  );
};

export default Main;
