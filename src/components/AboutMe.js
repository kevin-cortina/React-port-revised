import React from 'react';
import profilePic from '../images/pic-3.jpg';

function AboutMe () {
  return (  
    
    <section className="about-me-section">
      <img id="face-img"src={profilePic} alt="Your Name" className="navigation"/>
        <div className="textDescriptions">
          <h2 id="about-me-header">ABOUT ME</h2>
              <div id="description">
                   I am a web developer from Seattle, Washington. I focus on full-stack development to bring the best and most efficient experience to the users and co-developers.
                   I like to try and establish scalability, stability, and reliability for applications. Here you will find project's I've work on in the past and projects I am currently working on,
                   as well as some details about myself and things I like to do in my free time. 
              </div>
                <div id="Recrecation section">
                  <h2 id="Recrecation header">RECREATIONAL ACTIVITIES</h2>
                  <div id="description">
                      Recreational working activities I like to do include real estate and coding projects. 
                      Outside of working, some of my main recrecational activities include going hiking, fishing, clamming, and going to the gym. 
                      When I am not out into the world I like to spend time with my two dogs, Ezekeial and Ezreal where we watch tv shows and movies.
                  </div>
                </div>
          </div>
    </section>


  );
}
    export default AboutMe;