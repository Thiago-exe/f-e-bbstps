var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");

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

//Abrindo e Fechando o modal de orçamento

for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var overlay = document.querySelector(".jl-overlay");
    var modalOrcamento = document.querySelector(".jl-modal");
    overlay.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle('jl-slide-top-in');
  });
}

// Animando Elementos on Scroll com Waypoints
var myScrollDown = document.querySelector('.jl-scroll-down')
var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    myScrollDown.classList.toggle('jl-fade-out');
  },
  offset: '80%'
})
