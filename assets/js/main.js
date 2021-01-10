let totalSliders = document.querySelectorAll('.slider--item').length;

let slideAtual = 0;

let slider = document.querySelector('.slider');
let sliderControls = document.querySelector('.slider--controls');

let sliderLargura = document.querySelector('.slider--width');

sliderLargura.style.width = `calc(100vw * ${totalSliders})`;

sliderControls.style.height = `${slider.clientHeight}px`;




function goPrev() {
  slideAtual--;

  if(slideAtual < 0) {
    slideAtual = totalSliders - 1;
  }

  updateMargin();
}

function goNext() {
  slideAtual++;

  if(slideAtual > (totalSliders - 1)) {
    slideAtual = 0;
  }

  updateMargin();
}



function updateMargin() {
  let sliderLarguraItem = document.querySelector('.slider--item').clientWidth;
  let newMargin = (slideAtual * sliderLarguraItem);

  sliderLargura.style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 8000);

let header = document.querySelector('header');
let logoImg = document.querySelector('.logo img');
let linkMenu = document.querySelector('.menu--navbar a');

window.onscroll = () => {
  if(window.scrollY > 100) {
    header.classList.add('stickyHeader');
    logoImg.src = 'assets/images/logo1-removebg-preview.png';
    linkMenu.style.color = '#000';
  } else {
    header.classList.remove('stickyHeader');
    logoImg.src = 'assets/images/logo2-removebg-preview.png';
    linkMenu.style.color = '#FFF';
  }
}