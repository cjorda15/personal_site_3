import React, { Component } from 'react';
import $ from 'jquery';

class Project extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        className={`project ${this.props.intialClassName}`}
        style={{ backgroundImage: `url(${this.props.info.img}) ` }}
      >
        <div className="project-content">
          <div className="project-info">
            <h6 className="project-title">{this.props.info.title}</h6>
            <div className="project-links">
              <a href={this.props.info.liveLink}>
                <img src="icons/screen.svg" />
              </a>
              <a href={this.props.info.codeSrcLink}>
                <img src="icons/code.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

// liveLink: `https://color-your-day.herokuapp.com/`,
// codeSrcLink
