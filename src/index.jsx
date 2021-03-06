// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Articles from './pages/Articles.jsx';
import Sources from './pages/Sources.jsx';

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Sources}>
      <Route path="sources" component={Sources} />
      <Route path="articles" component={Articles} />
    </Route>
  </Router>,
  document.getElementById('root')
);
