import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router';

const { Nav, Navbar, NavItem, Button } = ReactBootstrap;

/**
 * @description Navigation Component used across all components
 */
export default class NavigationBar extends React.Component {
  /**
   * @description -Logs out user when the logout button is clicked
   * @returns {void}
   */
  static logout() {
    localStorage.removeItem('user');
    location.reload();
  }

  /**
   * @returns {JSX.Element} Navbar element fro ReactBootstrap
   */
  render() {
    const isPathSources = !!this.props.location.pathname.match(/\/sources/);
    let sourceClass = '';
    if (isPathSources) {
      sourceClass = 'hidden';
    } else {
      sourceClass = '';
    }
    const navBar = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">International Aproko</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem className={sourceClass} eventKey={1}>
              <Link to="sources">Sources</Link>
            </NavItem>
          </Nav>
          <Nav className="pull-right">
            <NavItem eventKey={2}>
              <Button bsStyle="primary" bsSize="xs"
                onClick={NavigationBar.logout}>Logout
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    return navBar;
  }
}
