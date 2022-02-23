import React from 'react';
import { Button } from 'react-bootstrap';

export default function Navbars ( { currentPage, handlePageChange }) {

  return (  
    <nav>
      
      <div className="nav-section">

          <ul className="mb-2">
          <Button variant="light" size="lg" id="AboutMe"  active
          onClick={({}) => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'currentPage' : ''}
          > About me</Button>
          </ul>

          <ul className="mb-2">
          <Button variant="light" size="lg" id="ProjectMe"  active
          onClick={() => handlePageChange('Projects')}  className={currentPage === 'Projects' ? 'currentPage' : ''}
          > Portfolio</Button>
          </ul>

          <ul className="mb-2">
          <Button variant="light" size="lg" id="ResumeMe" active
          onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume'? 'currentPage' : ''}
          > Resume</Button>
          </ul>

          <ul className="mb-2">
          <Button variant="light" size="lg" id="ContactMe" active
          onClick={( {} ) => handlePageChange('Contacts')} className={currentPage === 'Contacts'? 'currentPage' : ''}
          > Contact me</Button>
          </ul>

    </div>
</nav>
  )};
