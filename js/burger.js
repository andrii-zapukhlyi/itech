document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".nav");
    
    burger.addEventListener('click', function() {
      nav.classList.toggle("active");
      burger.classList.toggle("active");
      return false;
    });
  
    const navLinks = document.querySelectorAll(".nav__link");
    const sections = document.querySelectorAll("section");
  
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        nav.classList.remove("active");
        burger.classList.remove("active");
      });
    }
  
    window.addEventListener('scroll', function() {
      nav.classList.remove("active");
      burger.classList.remove("active");
    });
  
    for (let i = 0; i < sections.length; i++) {
      sections[i].addEventListener('click', function() {
        nav.classList.remove("active");
        burger.classList.remove("active");
      });
    }
  });
  