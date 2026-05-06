
document.addEventListener("DOMContentLoaded", () => {


  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  });


  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    observer.observe(section);
  });

  const button = document.querySelector("button");
  const message = document.getElementById("message");

  if (button) {
    button.addEventListener("click", () => {
      message.textContent = "Thanks for visiting my portfolio!";
      message.style.marginTop = "10px";
      message.style.color = "#00796b";
    });
  }

  const allSections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    allSections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

});
