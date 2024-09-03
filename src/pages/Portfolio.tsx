import React from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <h2>Our Portfolio</h2>
      <p>
        Explore some of our finest works in signage, tarpaulins, acrylic, and
        wood designs.
      </p>
      <div className="portfolio-grid">
        {/* Add images dynamically */}
        <img src="/images/img1.jpg" alt="Portfolio 1" />
        <img src="/images/img2.jpg" alt="Portfolio 2" />
        <img src="/images/img3.jpg" alt="Portfolio 3" />
        <img src="/images/img4.jpg" alt="Portfolio 4" />
        <img src="/images/img5.jpg" alt="Portfolio 5" />
      </div>
    </div>
  );
};

export default Portfolio;
