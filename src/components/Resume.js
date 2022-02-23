import React from 'react';
import Resume2 from '../images/Resume.jpg'

function Resume ( handlePageChange) {
  return (  
    <div>
    <section id="project-1">
      <h4 id="project-header">Information</h4>
      <section>
        <p id="description">
          <p>We learned during these last 6 months; slack, visual studio code, githube, github pages, heroku, toolnet, node.js express.js, mysql, mysql worbench,  sequalize.</p>
        </p>
      

    <a id="portfolio-navigation" href={Resume} onClick={() => handlePageChange()}> 
    </a>
    <ul id="resume"> <a href={Resume2}> <b>📄 Resume</b> </a> 
    </ul>
    
    </section> 
    </section>
    </div>
  
  );
}
    export default Resume;