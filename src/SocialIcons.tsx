// src/SocialIcons.tsx
import React from 'react';
import { useTheme } from './ThemeContext'; // Import the useTheme hook
import './SocialIcons.css'; // Correct the path here

const SocialIcons: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className={`icons ${theme}`}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <div className="layer">
          <span className="fab fa-facebook-f"></span>
          <span className="fab fa-facebook-f"></span>
          <span className="fab fa-facebook-f"></span>
          <span className="fab fa-facebook-f"></span>
        </div>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <div className="layer">
          <span className="fab fa-twitter"></span>
          <span className="fab fa-twitter"></span>
          <span className="fab fa-twitter"></span>
          <span className="fab fa-twitter"></span>
        </div>
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <div className="layer">
          <span className="fab fa-instagram"></span>
          <span className="fab fa-instagram"></span>
          <span className="fab fa-instagram"></span>
          <span className="fab fa-instagram"></span>
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;
