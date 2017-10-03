import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './components/App';
require('./helper/video_animation.js');
require('./styles/index.scss');

const history = createHistory();

render(
  <Router history={history}>
    <Route to="/" component={App} />
  </Router>,
  document.getElementById('root')
);