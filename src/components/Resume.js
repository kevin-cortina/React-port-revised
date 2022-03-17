import React from 'react';
import Resume2 from '../images/Resume.jpg'

function Resume ( handlePageChange) {
  return (  
    <div>

    <section id="project-1">
      <h4 id="project-header">SUMMARY</h4>
        <div id="description">
        <ul>Junior Software Developer with demonstrated project history of working in the software development industry. 
        Skilled in jQuery, Javascript, MongoDB, HTML/CSS, and MySql. 
        Strong software developer professional graduated with a certificate from UW Professional & Continuing Education.</ul>
        </div>
      <h4 id="project-header">WORK EXPERIENCE</h4>
        <div id="description">
        <ul>File Manager - Harrigan, Leyh, Farmer, & Thomsen </ul>
        <ul>Real Estate Broker - Windermere</ul>
        <ul>Office Assistant - Cooley LLP</ul>
        </div>
      <h4 id="project-header">EDUCATION</h4>
        <div id="description"> 
        <ul>Amazon Web Services - Cloud Practionier Certification</ul>
        <ul>University of Washington - Certificate of Web Development</ul>
        <ul>California State University, San Marcos - Bachelor of Arts, Political Science</ul>
        </div>
        <h4 id="project-header">SKILLS</h4>
        <div id="description">
        <ul>Technical Skills: HTML/CSS, Javascript/jQuery, Bootstrap, React.js, MySQL, MongoDB, AJAX, GraphQL, Node.js, 
          Express.js, Heroku, GitHub, JSON, HTTP( Request methods). </ul>
        <ul>Soft Skills:  Customer Service, Organization, Communication, </ul> 
        </div>
          
    {/* Resume link */}
    <a id="portfolio-navigation" href={Resume} onClick={() => handlePageChange()}> 
    </a>
    <ul id="resume"> <a href={Resume2}> <b>📄 Resume</b> </a> 
    </ul>

    </section>
    </div>
  
  );
}
    export default Resume;