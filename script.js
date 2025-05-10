const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('header .nav-links a, .footer-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1); 
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






// Viewable image screen

 const modalImage = document.getElementById("modalImage");

 // Modal image click handler
 document.querySelectorAll(".image-stack a").forEach((item) => {
   item.addEventListener("click", function (event) {
     event.preventDefault(); // Prevent default behavior of anchor
     modalImage.src = item.getAttribute("href"); // Set the modal image source
   });
 });