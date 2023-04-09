import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Banner from './Banner'
import About from './About'

function Navbar1() {
  const [navbarColor, setNavbarColor] = useState('black');
  const [linkText, setLinkText] = useState('Home');
  const [linkPath, setLinkPath] = useState('/');
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
      setLinkText('New Link Name');
      setLinkPath('/new-link-path');
    } else {
      setLinkText('Home');
      setLinkPath('/');
    }

    const pathName = window.location.pathname;
    if (pathName === '/') {
      setNavbarColor('white');
    } else {
      setNavbarColor('black');
    }
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    setLinkPath(path);
    navigate(path);
  };

  return (
      
      <Navbar bg="light" variant="light" expand="lg" fixed='top'>
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to={linkPath} className="nav-link" onClick={handleLinkClick}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link">About</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navbar1;
