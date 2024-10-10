// Carousel
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Auto slide
setInterval(() => {
    moveSlide(1);
}, 5000); // Change image every 5 seconds

function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

// Whatsapp
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        // Hapus kelas "active" dari semua tautan navbar
        navLinks.forEach(function(link) {
          link.classList.remove("active");
        });
  
        // Tambahkan kelas "active" ke tautan yang diklik
        this.classList.add("active");
      });
    });
  });