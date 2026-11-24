// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after selecting a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Front-end contact form demonstration (does not send email)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields.";
    return;
  }

  formMessage.textContent = "Thank you, " + name + "! Your demo form was submitted.";
  contactForm.reset();
});

// Log page-load duration in the browser console
window.addEventListener("load", function () {
  const timing = performance.getEntriesByType("navigation")[0];
  if (timing) {
    console.log("Website load duration:",
      Math.round(timing.loadEventEnd - timing.startTime), "milliseconds");
  }
});
