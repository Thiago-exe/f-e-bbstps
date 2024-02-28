var btnContact = document.querySelector(".jl-btn-contact");

window.addEventListener("load", function () {
  var pagePreloader = document.querySelector(".jl-preloader");
  this.setTimeout(function () {
    pagePreloader.classList.add("jl-fade-out");
    pagePreloader.style.display = "none";
  }, 1);
});

btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});
