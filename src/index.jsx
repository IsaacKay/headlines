// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Articles from './pages/Articles.jsx';
import Sources from './pages/Sources.jsx';

ReactDom.render(
  <Router history={hashHistory}>
    <IndexRoute component={Sources} />
    <Route path="sources" component={Sources} />
    <Route path="articles" component={Articles} />
  </Router>, document.getElementById('root')
);
