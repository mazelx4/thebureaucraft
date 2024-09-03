// src/App.js
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeSwitcher = document.querySelector('.theme-switcher');

  // Theme Switcher functionality
  themeSwitcher.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
    } else {
      body.classList.replace('dark-theme', 'light-theme');
    }
  });

  // Carousel functionality
  const carouselContainer = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset for each image
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Initial call to set up the carousel
  updateCarousel();
});
