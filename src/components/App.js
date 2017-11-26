import React from 'react';
import Main from './Main';
import InitialDescription from './InitialDescription';
import Skills from './Skills';
import Projects from './Projects';
import '../helper/navbar';
import '../helper/icon-animation';
import '../helper/scroll';

const App = () => {
  return (
    <div className="app-container">
      <Main />
      <InitialDescription />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
