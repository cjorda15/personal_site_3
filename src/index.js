import React from 'react';
import { render } from 'react-dom';
// import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/App';
require('./styles/index.scss');

const history = createHistory();

render(<App />, document.getElementById('root'));
