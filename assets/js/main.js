let totalSliders = document.querySelectorAll('.slider--item').length;

let slideAtual = 0;

let slider = document.querySelector('.slider');
let sliderControls = document.querySelector('.slider--controls');

let sliderLargura = document.querySelector('.slider--width');


let widthScreen = screen.innerWidth;

let buttonMobile = document.querySelector('.menu--hamburger');
let menu = document.querySelector('.menu');
let menuUl = document.querySelector('.menu--navbar ul');
let menuLi = document.querySelectorAll('.menu--navbar ul li');

let menuUlLiA = document.querySelectorAll('.menu--navbar ul li a');
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

//setInterval(goNext, 8000);

let header = document.querySelector('header');
let logoImg = document.querySelector('.logo img');
let linkMenu = document.querySelectorAll('.menu--navbar li a');
let iconMenu = document.querySelectorAll('.menu--navbar i');

let dropdown = document.querySelectorAll('.dropdown');

// função que muda a cor das letras do menu
function menuLetterColor() {
  for(let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].style.color = '#000';
  }
  for(let i = 0; i < iconMenu.length; i++) {
    iconMenu[i].style.color = '#000';
  }

  for(let i = 0; i < dropdown.length; i++) {
    dropdown[i].style.backgroundColor = '#fff';
  }

}

// função que tras as cores do menu de volta ao normal
function menuDefaultFontColor() {
  for(let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].style.color = '#fff';
  }

  for(let i = 0; i < iconMenu.length; i++) {
    iconMenu[i].style.color = '#fff';
  }

  for(let i = 0; i < dropdown.length; i++) {
    dropdown[i].style.backgroundColor = '#000';
  }
}


// Evento Scroll
window.onscroll = () => {
  if(window.scrollY > 100) {
    header.classList.add('stickyHeader');
    logoImg.src = 'assets/images/logo1-removebg-preview.png';
    menuLetterColor();
    buttonMobile.style.color = '#000';
    menu.style.backgroundColor = '#fff';
    for(let i = 0; i < menuUlLiA.length; i++) {
      menuUlLiA[i].style.borderBottom = '1px solid #000';
    }
  } else {
    header.classList.remove('stickyHeader');
    logoImg.src = 'assets/images/logo2-removebg-preview.png';
    menuDefaultFontColor();
    buttonMobile.style.color = '#fff';
    menu.style.backgroundColor = '#000';
    for(let i = 0; i < menuUlLiA.length; i++) {
      menuUlLiA[i].style.borderBottom = '1px solid #fff';
    }
  }
}


buttonMobile.addEventListener('click', function() {
  let menuA = document.querySelectorAll('.menu--navbar ul li a');

  if(menu.style.width != '0%') {
    menu.style.width = '0%';
    for(let i=0; i<menuA.length; i++) {
      menuA[i].style.display = 'none';
    }
  } else {
    menu.style.width = '80%';
    for(let i=0; i<menuA.length; i++) {
      menuA[i].style.display = 'flex';
    }
  }
})