import React from 'react';

const InitialDescription = () => {
  return (
    <section className="initial-description-wrapper">
      <div id="about-1-background">
        <div className="about-1-icons-wrapper">
          <div
            className="about-1-icons"
            style={{ backgroundImage: 'url(icons/death_star.svg)' }}
          >
            <span className="death-star-not-active" />
          </div>
        </div>
      </div>
      <div
        id="about-2-background"
        style={{
          backgroundImage: "url('me.jpg')"
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
