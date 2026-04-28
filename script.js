let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});


const openMenuMobile = document.querySelector(".openMenuMobile");
const showMenuMobile = document.querySelector(".showMenuMobile");

openMenuMobile.addEventListener("click",(e)=>{
  e.preventDefault();
  openMenuMobile.classList.toggle("active");
  showMenuMobile.classList.toggle("showMenuMobile--expandirMenu");
  openMenuMobile.classList.toggle("openMenuMobile--bgColor");
  
  document.querySelectorAll(".openMenuMobile span").forEach(el=>{
    el.classList.toggle("barraWhite")
  });
  
 
})