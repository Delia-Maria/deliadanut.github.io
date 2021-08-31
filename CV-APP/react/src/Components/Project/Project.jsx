import React from "react";
import './Project.css';

const Project = () => {
    return (
        <div>
            <div className="wallpaper">
        <div className="project-description">
           <h1>PROJECT DONE</h1>
           <p>Though I have learned a lot from being in the professional world,
                some of my skills have been built from research,
                 observation and common sense. 
                 I know that to be truly successful in my career,
                  I need to be able to work with people,
                   find innovative solutions to professional problems and make contributions that really matter. 
                   I would be thrilled for any opportunity to keep building on my skill set. 
                   Let’s discuss what I can offer you. Get in touch today.</p>
        </div>
        </div>
        <div className="container-grid">
        <div className="shop-app">
            <div className="app-heading">
            <h3>MY SHOP APP</h3>
            <p>Single page App. React-JS, HTML, CSS.</p>
            <p>This project is about a marketing website where people can buy different products from accesories to clothes.</p>
            </div>
            <div className="project-image">
            <img src="src/images/me.jpg" width="250" height="200" ></img>
            </div>
        </div>
        <div className="toDo-app">
            <div className="app-heading">
            <h3>TO DO APP</h3>
            <p>Single page App. React-JS, HTML, CSS.</p>
            <p>The purpose of this project was to practice CRUD (create, read, update, delete) using fetch data from server.</p>
            </div>
            <div className="project-image">
            <img src="src/images/me1.jpg"width="250" height="200"></img>
            </div>
        </div>
        </div>
        </div>
        
    )
}
export default Project;
