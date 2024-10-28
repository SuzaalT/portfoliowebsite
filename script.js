// Dark mode toggle function
function toggleDarkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

// Smooth scrolling to sections
function scrollSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
