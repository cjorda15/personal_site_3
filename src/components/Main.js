import React from 'react';
import InitialDescription from './InitialDescription';

const Main = () => {
  return (
    <section className="main-wrapper">
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop id="bgvid" src="street.mp4" />
      </div>
      <div className="main-title">
        <h1>Chris Jordan</h1>
        <p>Front End Developer</p>
      </div>
      <div className="main-contact-btn-wrapper">
        <div id="scroll-to-about" to={'#about'}>
          &darr;
        </div>
      </div>
      <InitialDescription />
    </section>
  );
};

export default Main;
