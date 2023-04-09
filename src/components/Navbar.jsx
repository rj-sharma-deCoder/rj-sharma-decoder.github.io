import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { useState, useEffect, useRef} from 'react'

import '../App.css'


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('#home')
    const [scrolled, setScrolled] = useState(false)

    const [clicked, setClicked] = useState('')

    const [navbarHeight] = useState(70);
    
    //const navbarRef = useRef(null);
    const [expanded, setExpanded] = useState(false);

    
   
    useEffect(()=>{

        //const navbarHeight1 = navbarRef.current.clientHeight;
        //setNavbarHeight(navbarHeight1)
        // Check if the current URL is not the home page
        
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    },[])



    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const scrollPositionY = window.pageYOffset;
        const scrollPositionX = window.pageXOffset;

        const elementIds = ['home', 'about', 'projects', 'contact'];
        for (let i = elementIds.length -1 ; i >= 0; i--) {
            const element = document.getElementById(elementIds[i]);
            if (element.offsetTop <= scrollPositionY + navbarHeight) {
              setActiveLink('#' + element.id); // Update the active element ID
              break;
            }
        }

        if (scrollPosition > 50) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
        
    }

    const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        console.log(targetId, targetElement, targetPosition)
        console.log(typeof(targetPosition))
    
        if (window.innerWidth>768) {
        window.scrollTo({
          top: targetPosition - navbarHeight,
          behavior: 'smooth'
        });
        }
        else{
            window.scrollTo({
                top: targetPosition - 95,
                behavior: 'smooth'
        })
            }

      }

        const handleNavSelect = () => {
            console.log("Clicked ####")
            setExpanded(false); 
    }

    
      // fixed={window.innerWidth >= 768 ? 'top' : null}
  return (
    <div>
        
            <Navbar expanded={expanded} onToggle={setExpanded} fixed={window.innerWidth>768 ? 'top': null} bg={ (window.innerWidth <768) ? 'dark': (scrolled? 'dark' : '')} variant='dark' expand="md" >
                <Container>
                    <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navBar" onClick={handleNavSelect} >
                            <Nav.Item className='me-auto'  >
                            <a id='nav-text' href={'#home'} onClick={handleLinkClick} className={activeLink === '#home'?'active':''}>Home</a>
                            </Nav.Item>
                            <Nav.Item>
                            <a id='nav-text' href={'#about'} onClick={handleLinkClick} className={activeLink === '#about'?'active':''} >About</a>
                            </Nav.Item>
                            <Nav.Item>
                            <a id='nav-text' href={'#projects'} onClick={handleLinkClick} className={activeLink === '#projects'?'active':''} >Projects</a>
                            </Nav.Item>
                            <Nav.Item>
                            <a id='nav-text' href={'#contact'} onClick={handleLinkClick} className={activeLink === '#contact'?'active':''} >Contact</a>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        
    </div>
  )
}

export default NavBar