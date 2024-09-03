// src/App.tsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SocialIcons from './SocialIcons';
import Navbar from './components/Navbar';
import { ThemeProvider, useTheme } from './ThemeContext';
import Carousel from './components/Carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Lazy load pages for better performance
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <div className="main-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
              </Routes>
            </Suspense>
          </div>
          <footer className="footer">
            <SocialIcons />
            <p>© 2024 THE BUREAUCRAFT. All rights reserved.</p>
          </footer>
          <ThemeSwitcherButton />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

// Theme Switcher Button component
const ThemeSwitcherButton: React.FC = () => {
  const { toggleTheme } = useTheme();
  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <span className="moon-icon">🌙</span>
    </button>
  );
};

// Home Component with Enhanced Carousel
const Home: React.FC = () => (
  <main className="home-container">
    <section className="hero">
      <h1>Welcome to The Bureaucraft</h1>
      <p>
        Your one-stop shop for exquisite signage, tarpaulins, acrylic, wood
        designs, and custom printed gifts.
      </p>
    </section>
    <section className="carousel-section">
      <Carousel
        images={[
          '/images/img1.png',
          '/images/img2.png',
          '/images/img3.png',
          '/images/img1.png',
          '/images/img2.png',
        ]}
      />
    </section>
    <section className="content-section">
      <h2>Why Choose Us?</h2>
      <p>
        At The Bureaucraft, we believe in quality craftsmanship, creativity, and
        customer satisfaction.
      </p>
      <p>
        Whether you're looking for eye-catching signage for your business,
        beautiful custom gifts for special occasions, or unique wood designs
        that stand out, we've got you covered!
      </p>
    </section>
    <section className="services-highlight">
      <SocialIcons />
      <h2>Our Services</h2>
      <ul>
        <li>High-Quality Signage Design & Printing</li>
        <li>Custom Tarpaulins and Event Banners</li>
        <li>Acrylic and Mahogany Wood Engravings</li>
        <li>Unique Printed Gifts for All Occasions</li>
      </ul>
    </section>
    <section className="cta-section">
      <h2>Get in Touch</h2>
      <p>
        Contact us today to discuss your next project or visit our Portfolio to
        see our work.
      </p>
      <a href="/contact" className="cta-button">
        Contact Us
      </a>
    </section>
  </main>
);
