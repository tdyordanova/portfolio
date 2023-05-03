//<!-- Class: WEB210.2102, Assignment Lesson 14/15 - Final Project Personal Portfolio Website, Name: Tihomira Yordanova, Date:5/02/2023, Javascript for Sticky Header When Scrolling Down
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

