const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

function validate() { 
  let name = 
      document.getElementById("name").value; 
  let subject = 
      document.getElementById("subject").value; 
  let phone = 
      document.getElementById("phone").value; 
  let email = 
      document.getElementById("email").value; 
  let message = 
      document.getElementById("message").value; 
  let error_message = 
      document.getElementById("error_message"); 

  error_message.style.padding = "10px"; 

  let errors = []; 

  if (name.length < 5) { 
      errors.push("Please Enter a valid Name");} 
  if (subject.length < 10) { 
      errors.push("Please Enter a Correct Subject");} 
  if (isNaN(phone) || phone.length != 10) { 
      errors.push("Please Enter a valid Phone Number");} 
  if (email.indexOf("@") == -1 || email.length < 6) { 
      errors.push( 
          "Please Enter a valid Email");} 
  if (message.length <= 40) { 
      errors.push( 
          "Please Enter More Than 40 Characters");} 

  if (errors.length > 0) { 
      error_message.innerHTML = 
          errors.join("<br>"); 
      return false;} 
  else { 
      alert( 
          "Form Submitted Successfully!"); 
      return true;}}
