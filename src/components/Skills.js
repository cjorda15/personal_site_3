import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h6 className="section-headline">
        <span>S</span>KILLS
      </h6>
      <section className="skills-wrapper">
        <div className="skills" id="skill-1">
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/html-5-icon.png)` }}
            />
            <div>HTML5</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/css-icon.png)` }}
            />
            <div>CSS3</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/javascript-icon.png)` }}
            />
            <div>ES6</div>
          </div>
        </div>
        <div className="skills" id="skill-2">
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/react-icon.png)` }}
            />
            <div>React</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/wordpress-icon.png)` }}
            />
            <div>WORDPRESS</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/webpack-icon.png)` }}
            />
            <div>WEBPACK</div>
          </div>
        </div>
        <div className="skills" id="skill-3">
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/seo-icon.png)` }}
            />
            <div>SEO</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/mobile-icon.png)` }}
            />
            <div>RESPONSIVE</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/test-icon.png)` }}
            />
            <div>TESTING</div>
          </div>
        </div>
        <div className="skills" id="skill-4">
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/node-icon.png)` }}
            />
            <div>NODE</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/sass-icon.png)` }}
            />
            <div>SASS</div>
          </div>
          <div className="skill-card">
            <div
              className="style-icon"
              style={{ backgroundImage: `url(icons/database-icon.png)` }}
            />
            <div>MONGO</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
