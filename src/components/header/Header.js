import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText
  } from 'reactstrap';
import './Header.css';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Hepsiburada</NavbarBrand>
          <Nav className="mr-auto" navbar>
			<NavItem>
				<NavLink href="/" exact className="header-link">Links</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/add-new-link" exact className="header-link">Add Link</NavLink>
			</NavItem>
          </Nav>
          <NavbarText>Links Votes</NavbarText>
      </Navbar>
    </div>
  );
}
export default Header;
