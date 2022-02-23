import React from 'react';
import Navbar from './Navbar';
import skylineHead from '../images/skyline.jpeg';

function Header ({ currentPage, handlePageChange }) {

  return (
<header className="Header">
  <img className="skylineHead" src={skylineHead}  />
  <h1 className="H1-name"> Kevin Cortina </h1>

  <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
</header>


  );
}

export default Header;