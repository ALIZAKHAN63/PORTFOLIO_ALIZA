import React from 'react'
import "./Description.css"

const Description = () => {
  return (
    <div className="about-wrapper">
    <div className="browser-header">
      <span className="dot red"></span>
      <span className="dot yellow"></span>
      <span className="dot green"></span>
    </div>
    <div className="about-container">
      <h2 className="about-heading">Hi 🙂</h2>
      <p className="about-text">
        👋 I'm <strong>Aliza</strong>, a <strong>Front-End Developer</strong> passionate about building 
        user-friendly and visually appealing web experiences. I work with{" "}
        <strong>HTML, CSS, JavaScript, and React.js</strong>, crafting smooth and responsive designs.
      </p>
      <p className="about-text">
        I continuously upskill through courses and projects, always learning and improving to 
        create seamless digital experiences.
      </p>
      <p className="about-text">This is my portfolio, where I showcase my work and journey.</p>
      <p className="about-highlight">💡 Let's build something amazing together! 💜</p>
    </div>
  </div>
  );
};

export default Description;