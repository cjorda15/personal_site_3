import React from 'react';

const Project = ({ info, intialClassName }) => {
  return (
    <div
      className={`project ${intialClassName}`}
      style={{ backgroundImage: `url(${info.img}) ` }}
    >
      <h6>{info.title}</h6>
      <p>{info.summary}</p>
    </div>
  );
};

export default Project;
