import React, { Component } from 'react';
import Project from './Project';
import $ from 'jquery';

const project = [
  {
    title: 'color your day',
    summary: 'used with blah',
    liveLink: `https://color-your-day.herokuapp.com/`,
    codeSrcLink: 'https://github.com/cjorda15/color_your_day',
    img: `project_images/colorMe-min.png`
  },
  {
    title: 'Static Site',
    summary: 'used with grrr',
    liveLink: `https://cjorda15.github.io/cj-comp-challenge-3/`,
    codeSrcLink: 'https://github.com/cjorda15/cj-comp-challenge-3',
    img: `project_images/static-min.png`
  },
  {
    title: 'Space Breakout',
    summary:
      'asdlkfnlkasdfmla ajsndfkjnaks nakn fkna kjsnfjkansfjkna knfkan sfkjn ajkfnjkansfjknasjkfn jkan fjkna jkfnjk sankn n jakskfjans jkfnjk',
    liveLink: `"https://evening-harbor-90728.herokuapp.com"`,
    codeSrcLink: 'https://github.com/cjorda15/gametime',
    img: `project_images/space-min.png`
  },
  {
    title: 'CODE SPORT',
    summary: 'used with blah',
    liveLink: `https://github.com/cjorda15/CodeSport`,
    codeSrcLink: 'https://sleepy-anchorage-74386.herokuapp.com',
    img: `project_images/codeSport-min.png`
  }
];

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      listLength: project.length - 1,
      currentNumber: 0
    };
  }

  handleClick(direction) {
    let counter = this.state.currentNumber;
    if (direction == 'left' && counter > 0) {
      counter = counter - 1;
      this.setState({ currentNumber: counter });
      $('.project')[counter].classList.remove('not-active-project');
      $('.project')[counter].classList.add('active-project');
      $('.project')[counter + 1].classList.add('not-active-project');
      $('.project')[counter + 1].classList.remove('active-project');
      console.log($('.project')[counter]);
    }
    if (direction == 'right' && counter < this.state.listLength) {
      counter = counter + 1;
      this.setState({ currentNumber: counter });
      $('.project')[counter].classList.remove('not-active-project');
      $('.project')[counter].classList.add('active-project');
      $('.project')[counter - 1].classList.add('not-active-project');
      $('.project')[counter - 1].classList.remove('active-project');
    }
    console.log($('.project')[counter]);
  }

  renderProjects() {
    return (
      <div className="projects">
        <span
          onClick={() => {
            this.handleClick('left');
          }}
          className="projects-btn"
        >
          &larr;
        </span>
        {project.map((proj, i) => {
          return i == 0 ? (
            <Project intialClassName={'active-project'} info={proj} key={i} />
          ) : (
            <Project
              intialClassName={'not-active-project'}
              info={proj}
              key={i}
            />
          );
        })}
        <span
          onClick={() => {
            this.handleClick('right');
          }}
          className="projects-btn"
        >
          &rarr;
        </span>
      </div>
    );
  }

  render() {
    return (
      <section className="projects-wrapper">
        <h6 className="section-headline">
          <span>P</span>ROJECTS
        </h6>
        {this.renderProjects()}
      </section>
    );
  }
}
export default Projects;
