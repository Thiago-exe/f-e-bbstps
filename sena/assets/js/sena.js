console.log("Carreguei!");
//GALERIA
const track = document.getElementById("image-track");

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -70);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, 0)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);


//SLIDE OBRAS
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('show');
    } else {
      slide.classList.remove('show');
    }
  });
}

const nextBtns = document.querySelectorAll('.nextBtn');
nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});
showSlide(currentSlide);

//OBRAS SELEÇÃO
const palacio_novo = document.getElementById("conteudo-palacionovo");
const conteudo_palacio = document.getElementById("conteudo-palacio");

// Obter referências para as imagens
const imgPalacioNovo = document.querySelector('img[data-target="conteudo_palacio_novo"]');
const imgPalacio = document.querySelector('img[data-target="conteudo_palacio"]');

// Adicionar event listeners para cliques nas imagens
imgPalacioNovo.addEventListener('click', function() {
    conteudo_palacio.classList.add('hidden');
    palacio_novo.classList.remove('hidden');
    imgPalacioNovo.classList.add('selected');
    imgPalacio.classList.remove('selected');
    document.getElementById('slide2').classList.add('hidden');
    document.getElementById('slide1').classList.remove('hidden');
});

imgPalacio.addEventListener('click', function() {
    palacio_novo.classList.add('hidden');
    conteudo_palacio.classList.remove('hidden');
    imgPalacioNovo.classList.remove('selected');
    imgPalacio.classList.add('selected');
    document.getElementById('slide2').classList.remove('hidden');
    document.getElementById('slide1').classList.add('hidden');
});

