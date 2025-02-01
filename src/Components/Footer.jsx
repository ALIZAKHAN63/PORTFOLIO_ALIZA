import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/ALIZAKHAN63" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/aliza-khan-6b258b28b" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon" />
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} ALIZA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;