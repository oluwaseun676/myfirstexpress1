const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
services.addEventListener("click", (evt) =>{
  evt.preventDefault()
  window.location.href = "/frontend/services"
})
about.addEventListener("click",(evt)=>{
  evt.preventDefault();
  window.location.href = "/frontend/about";
})
home.addEventListener("click",(evt)=>{
  evt.preventDefault();
  window.location.href = "/frontend/";
}
)
