import React, { Component } from 'react';
import $ from 'jquery';

class Project extends Component {
  constructor() {
    super();
  }

  handleClick() {
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
          <h6 className="project-title">{this.props.info.title}</h6>
          <p>{this.props.info.summary}</p>
          <p
            onClick={() => {
              this.handleClick();
            }}
            className="toggleButton"
          >
            x summary
          </p>
        </div>
        <div className="project-content project-content-active">
          <div className="project-info">
            <h6 className="project-title">{this.props.info.title}</h6>
            <div className="project-links">
              <a href={this.props.info.liveLink}>
                <div>@</div>
                <img src="icons/screen.svg" />
              </a>
              <a href={this.props.info.codeSrcLink}>
                <div>code</div>
                <img src="icons/code.svg" />
              </a>
            </div>
            <p
              onClick={() => {
                this.handleClick();
              }}
              className="toggleMenu"
            >
              &larr; summary
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

// liveLink: `https://color-your-day.herokuapp.com/`,
// codeSrcLink
