import React from 'react';
import { render } from 'react-dom';
// import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/App';
require('./styles/index.scss');

const history = createHistory();

render(
  // <Router history={history}>
  //   <Route to="/" component={App} />
  // </Router>,
  <App />,
  document.getElementById('root')
);
