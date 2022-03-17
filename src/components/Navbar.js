import React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';

export default function Navbars ( { currentPage, handlePageChange }) {

  return (  
    
      <Container className="nav-section">
        <Nav className="me-auto">
          <Navbar className="mb-2">
          <Button variant="light" size="lg" id="basic-navbar-nav"  active
          onClick={({}) => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'currentPage' : ''}
          > About me</Button>
          </Navbar>

          <Navbar className="mb-2">
          <Button variant="light" size="lg" id="basic-navbar-nav"  active
          onClick={() => handlePageChange('Projects')}  className={currentPage === 'Projects' ? 'currentPage' : ''}
          > Portfolio</Button>
          </Navbar>

          <Navbar className="mb-2">
          <Button variant="light" size="lg" id="basic-navbar-nav" active
          onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume'? 'currentPage' : ''}
          > Resume</Button>
          </Navbar>

          <Navbar className="mb-2">
          <Button variant="light" size="lg" id="basic-navbar-nav" active
          onClick={( {} ) => handlePageChange('Contacts')} className={currentPage === 'Contacts'? 'currentPage' : ''}
          > Contact me</Button>
          </Navbar>
        </Nav>
    </Container>
  )};
