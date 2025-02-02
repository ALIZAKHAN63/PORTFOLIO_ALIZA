import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <div ref={ref} className="experience-section">
      <h1 className={`experience-heading ${inView ? 'fadeInDown' : ''}`}>EXPERIENCE</h1>
      <div className="timeline">
        <div className={`timeline-line ${inView ? 'drawLine' : ''}`}></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${inView ? 'fadeInUp' : ''}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
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