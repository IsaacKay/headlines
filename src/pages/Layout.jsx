import React from 'react';
import NavigationBar from '../components/NavigationBar.jsx';
import { HashRouter, Route, Match, Link, Miss } from 'react-router';
import Sources from './Sources.jsx';
import Articles from './Articles.jsx';

export default class Layout extends React.Component {
  render() {
    return (
        <div>
          <NavigationBar />
          {this.props.children}
        </div>
    );
  }
}
