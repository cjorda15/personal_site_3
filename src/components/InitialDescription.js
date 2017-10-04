import React from 'react';

const InitialDescription = () => {
  return (
    <section className="initial-description-wrapper">
      <div id="about-1-background">
        <i className="about-1-icons about-1-icon-1">&spades;</i>
        <i className="about-1-icons about-1-icon-2">&hearts;</i>
        <i className="about-1-icons about-1-icon-3">&clubs;</i>
        <i className="about-1-icons about-1-icon-4">&diams;</i>
      </div>
      <div
        id="about-2-background"
        style={{
          backgroundImage: "url('office.jpg')"
        }}
      />
      <h6>
        I am a creative front-end developer who enjoys designing and developing
        UI/UX web experiences with a focus on usability and responsive web
        design
      </h6>
    </section>
  );
};

export default InitialDescription;
