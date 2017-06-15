import React from 'react';
import NavigationBar from '../components/NavigationBar.jsx';

/**
 * @description parent  containing navbar and children
 * It presents Navbar all through all routes.
 */
export default class Layout extends React.Component {
  /**
   * @return {JSX.Element} -Navbar and all it's children passed through
   * props.children current route component
   */
  render() {
    return (
        <div>
          <NavigationBar location={this.props.location}/>
          {this.props.children}
        </div>
    );
  }
}
