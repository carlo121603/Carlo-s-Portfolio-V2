const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('header .nav-links a, .footer-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute('href').substring(1); // Get the ID without the #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight; // Get header height
      const targetPosition = targetElement.offsetTop - headerHeight; // Offset scroll position

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Smooth scrolling effect
      });
    }
  });
});


AOS.init({
  duration: 1000, // Animation duration (in milliseconds)
  once: true,     // Whether animation should happen only once - while scrolling down
});
