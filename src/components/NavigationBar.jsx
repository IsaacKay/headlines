// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router';

const { Nav, Navbar, NavItem } = ReactBootstrap;
const NavigationBar = (() => {
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
            <NavItem eventKey={1}><Link to="sources">Sources</Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  return navBar;
});
export default NavigationBar;
