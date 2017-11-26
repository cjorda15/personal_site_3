import React, { Component } from 'react';
import $ from 'jquery';

class Project extends Component {
  constructor() {
    super();
  }

  handleClick() {
    console.log('MEO');
    $('.project-content')
      .toggleClass('project-content-inactive')
      .toggleClass('project-content-active');
  }

  render() {
    return (
      <div
        className={`project ${this.props.intialClassName}`}
        style={{ backgroundImage: `url(${this.props.info.img}) ` }}
      >
        <div className="project-content project-content-inactive">
          <p>{this.props.info.summary}</p>
          <p
            onClick={() => {
              this.handleClick();
            }}
            className="toggleButton"
          >
            &rarr;
          </p>
        </div>
        <div className="project-content project-content-active">
          <div className="project-info">
            <h6>{this.props.info.title}</h6>
            <p
              onClick={() => {
                this.handleClick();
              }}
              className="toggleMenu"
            >
              &larr; summary
            </p>
          </div>
          <div className="project-links">
            <a href={this.props.info.liveLink}>live</a>
            <a href={this.props.info.codeSrcLink}>code</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

// liveLink: `https://color-your-day.herokuapp.com/`,
// codeSrcLink
