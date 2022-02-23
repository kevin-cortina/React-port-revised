import React from 'react';
import { BsGithub, BsStackOverflow, BsLinkedin } from "react-icons/bs";
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';

function Footer () {
  return (  
    <section className="socialSection">
    <ul className="footIcon" id="linkedin"><b></b> <a href="https://www.linkedin.com/in/kevin-c-331364219/" target="_blank" rel="noopener noreferrer">< BsLinkedin size={25}/> </a> </ul>    
    <ul className="footIcon" id="github"><b></b> <a href="https://github.com/kevin-cortina" target="_blank" rel="noopener noreferrer"> < BsGithub size={25} /></a></ul>
    <ul className="footIcon" id="stackOF"><b></b> <a href="https://stackoverflow.com/users/16532703/kevin-c" target="_blank" rel="noopener noreferrer">< BsStackOverflow size={25}/></a></ul> 
    <p>© 2021 Kevin Cortina Portfolio</p>
    </section>
  );
}
    export default Footer;