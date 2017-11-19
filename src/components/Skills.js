import React from 'react';

const Skills = () => {
  return (
    <div className="skills-container">
      <h6 className="section-headline">
        <span>S</span>KILLS
      </h6>
      <section className="skills-wrapper">
        <div className="skills" id="skill-1">
          <div>
            <div
              style={{ backgroundImage: `url(icons/html-5-icon.png)` }}
            />HTML
          </div>
          <div id="css-skill">
            <div style={{ backgroundImage: `url(icons/css-icon.png)` }} />CSS
          </div>
          <div id="js-skill">
            <div
              style={{ backgroundImage: `url(icons/javascript-icon.png)` }}
            />Javascript
          </div>
        </div>
        <div className="skills" id="skill-2">
          <div id="react-skill">
            <div
              style={{ backgroundImage: `url(icons/react-icon.png)` }}
            />REACT
          </div>
          <div id="db-skill">
            <div
              style={{ backgroundImage: `url(icons/database-icon.png)` }}
            />DATABASE
          </div>
          <div id="webpack-skill">
            <div
              style={{ backgroundImage: `url(icons/webpack-icon.png)` }}
            />WEBPACK
          </div>
        </div>
        <div className="skills" id="skill-3">
          <div id="seo-skill">
            <div style={{ backgroundImage: `url(icons/seo-icon.png)` }} />SEO
          </div>
          <div id="mobile-skill">
            <div
              style={{ backgroundImage: `url(icons/mobile-icon.png)` }}
            />MOBILE
          </div>
          <div id="wordpress-skill">
            <div
              style={{ backgroundImage: `url(icons/wordpress-icon.png)` }}
            />WORDPRESS
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
