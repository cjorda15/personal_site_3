import React from 'react';
import InitialDescription from './InitialDescription';
import Skills from './Skills';

const Main = () => {
  return (
    <section className="main-wrapper">
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop id="bgvid" src="nightlife.mov" />
      </div>
      <div className="main-title-wrapper">
        <h1 className="intro-title">
          <span>C</span>
          <span>h</span>
          <span>r</span>
          <span>i</span>
          <span>s</span> J<span>o</span>
          <span>r</span>da<span>n</span>
        </h1>
        <div id="intro-flash" />
        <h1 className="intro-title">
          <span>F</span>
          <span>r</span>o<span>n</span>t E<span>n</span>d
        </h1>
        <h1 className="intro-title">
          D
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>p<span>e</span>
          <span>r</span>
        </h1>
      </div>
      <div className="main-contact-btn-wrapper">
        <div id="scroll-to-about" to={'#about'}>
          &darr;
        </div>
      </div>
      <InitialDescription />
      <Skills />
    </section>
  );
};

export default Main;
