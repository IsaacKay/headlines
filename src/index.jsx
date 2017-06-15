// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Articles from './pages/Articles.jsx';
import Sources from './pages/Sources.jsx';
import Layout from './pages/Layout.jsx';
import Login from './pages/Login.jsx';

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={localStorage.user ? Sources : Login} />
      <Route path="sources" component={localStorage.user ? Sources : Login} />
      <Route path="articles" component={localStorage.user ? Articles : Login} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
