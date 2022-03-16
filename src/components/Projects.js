import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import project1 from '../images/note-taker-app.png';
import project2 from '../images/EMS-app.png';
import project3 from '../images/weatherdash-sc.jpeg';
import project4 from '../images/groupproject2.jpeg';
import project5 from '../images/ECOM.png';
import project6 from '../images/FTSC.png';

function Projects () {

  return (  
<section className="projects-box-section">
    <section id="project-1">
        <h4 id="project-header">NOTE TAKER</h4>
        <section className="projectCon">
            <a href="https://github.com/kevin-cortina/Note-taker-new" target="_blank" rel="noopener noreferrer" className="Port-img-3"> 
            <img className="Port-img-3" src={project1} alt="PLACE HOLDER 1"/>            
                </a>
            <div id="container">
                Note Taker, was created so that small business owners would be easily able to write and save notes. 
                It helps users to track and modify thoughts and tasks that they would need to complete. 
                This application uses an Express.js back end and will save and retrieve note data from a JSON file.
                We built out the back end and connected it to the front-end, and then deployed the entire application to Heroku.
                The main focus of this application/exercise is to demonstrate using the technologies of express.js, JSON manipulation, 
                being able to change/use pre-exisiting code to connect the back-end to.
                </div>
        </section>
    </section>
        <section id="project-2">
            <h4 id="project-header">EMPLOYEE MANAGEMENT SYSTEM</h4>
            <section className="projectCon">
            <a href="https://github.com/kevin-cortina/Employee_Management_System" target="_blank" rel="noopener noreferrer"> 
            <img className="Port-img-3" src={project2} alt="PLACE HOLDER 1" />
                </a>
                <div id="container">
                    The Employee Management System was created with an easy interface that allow non-developers to easily view and interact with information stored in databases. 
                    This content management systems (CMS) is regularly used and this application displays that. 
                    I've built this command-line application from scratch to help manage future company's employee database. 
                    The technology being used in this application is Node.js, Inquirer, and MySQL.
                </div>  
            </section>
        </section>
        
        <section id="project-3">
            <h4 id="project-header">WEATHER DASHBOARD</h4>
            <section className="projectCon">
            <a href="https://github.com/kevin-cortina/Weather-Dashboard" target="_blank" rel="noopener noreferrer"> 
            <img className="Port-img-3" src={project3} alt="PLACE HOLDER 1" />
            </a>
                <div id="container">
                    Weather dashboard uses third party API's from the website https://openweathermap.org/api/one-call-api. 
                    The purpose of this application is to be able to use and manipulate third party API's, while having the CSS and HTML change according to the weather. 
                    One of the best exercises in this project was that you needed 2 different API's
                    to feed into one another to pull more information from the individual city day chart to the individual city 5-day chart. 
                </div>
            </section>
        </section>

        <section id="project-4">
         <h4 id="project-header">INTERACTOR</h4>
            <section className="projectCon">
            <a href="https://github.com/kevin-cortina/GroupProject2-Old" target="_blank" rel="noopener noreferrer"> 
            <img className="Port-img-3" src={project4} alt="PLACE HOLDER 1" />
                </a>
                <div id="container">
                    Interactor uses an API from IMDB that allows user's with a key to pull movie data from their database. We created this application in order 
                    to figure out what 2 actors are in the same movies together witout having to use google and their expansive search results. 
                    We wanted to create a relative small and concise application for the average movie-goer. 
                    For the first project I worked on creating the CSS and HTML for the application along with creating the cards
                    that the results are displayed on.  

                    We continued as a group to work on this for project 2. For project 2 we had to included a back end to the application, had to deploy to heroku, and implement routes and models. 
                    We went with letting the user be able to create a username, profile and bio on the application.
                    The part that I work on was converting our previous HTML/CSS to handlebars.js. I would have to admit that the usage of handle bars was a challenge but we managed to prevail when we turned it in. 
                </div>

            </section>
        </section>

        <section id="project-5">
         <h4 id="project-header"> E-Commerce BackEnd</h4>
            <section className="projectCon">
            <a href="https://github.com/kevin-cortina/E-Com-BE" target="_blank" rel="noopener noreferrer"> 
            <img className="Port-img-3" src={project5} alt="PLACE HOLDER 1" />
                </a>
                 <div id="container">
                    E-Commerce Backend allows an easy access to change the stores catalog. This application can get specific when looking for items or groups of items.
                    By using this back-end application users can easily add, delete, update, their store information. By using directly from insomnia we are able to make requests
                    to the back end of the application without having our front end fully set-up which allows efficienies in work flow when departments are not waiting for one another. 
                </div>

            </section>
        </section>

        <section id="project-6">
         <h4 id="project-header"> Fitness Tracker</h4>
            <section className="projectCon">
            <a href="https://github.com/kevin-cortina/Fitness_Tracker_New" target="_blank" rel="noopener noreferrer"> 
            <img className="Port-img-3" src={project6} alt="PLACE HOLDER 1"/>
                </a>
                <div id="container">
                    Fitness Tracker application helps individuals track their total measurements in working out. 
                    It gives them the ability to see the total amount of weight and total time working out. This application's back end runs through MongoDB atlas.
                    By using this application users can set their own workout plan, track total measurements of how their workout.
                </div>

            </section>
        </section>

        
</section>
  );
}
    export default Projects;