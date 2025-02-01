import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='Projector'>
      <h1 className='Projectheading'>PROJECTS</h1>
      <div className="image-container">
        <a href="https://cool-dragon-3c0a0a.netlify.app/" target="_blank" rel="todo">
          <img className='pic1' src="/to do app.webp" alt="todo" />
        </a>
        <a href="https://amazing-cannoli-e329b8.netlify.app/" target="_blank" rel="QuizApp">
          <img className='pic2' src="/quiz.png" alt="quiz" />
        </a>
        <a href="https://gleeful-cupcake-093d5f.netlify.app/" target="_blank" rel="Game">
          <img className='pic3' src="tictac.png" alt="clone" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
