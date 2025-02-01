import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Software Developer Intern at 1PercentLabs',
    role: 'JavaScript Developer Intern',
    duration: 'July 2024 - August 2024',
    details: [
      'Developed and maintained web applications using JavaScript.',
      'Collaborated with cross-functional teams to define and implement new features.',
      'Optimized applications for maximum speed and scalability.'
    ]
  },
  {
    title: 'React.js Developer Intern at YoungDev',
    role: 'React.js Developer Intern',
    duration: 'January 2025 - Present',
    details: [
      'Assisting in the development of client-side architecture.',
      'Building reusable components and front-end libraries.',
      'Conducting code reviews and providing constructive feedback.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h1 className="experience-heading">EXPERIENCE</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="content">
              <h2>{exp.title}</h2>
              <h3>{exp.role}</h3>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;