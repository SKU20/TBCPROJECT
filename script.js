function handleScroll() {
    var header = document.getElementById('main-header');

    var scrollPosition = window.scrollY || window.pageYOffset;

    if (window.innerWidth > 980) { 
        if (scrollPosition > 0) {
            header.style.backgroundColor = 'rgba(33, 33, 33, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(26, 30, 31, 1)';
        }
    }
}

window.addEventListener('scroll', handleScroll);

const sliderWrapper = document.getElementById('slider-wrapper');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
const slides = document.querySelectorAll('.slide');

sliderWrapper.classList.add('transition');

slides.forEach((slide, i) => {
const distance = i - index;
const targetOpacity = (distance >= 0 && distance < 3) ? 1 : 0;

console.log(`Slide ${i}, Distance: ${distance}, Target Opacity: ${targetOpacity}, Index: ${index}`);

slide.style.transition = 'opacity 1s ease-in-out';
slide.style.opacity = targetOpacity;

if (targetOpacity === 1) {
slide.style.display = 'block';
slide.classList.add('animate-slide');
} else {
slide.style.display = 'none';
slide.classList.remove('animate-slide');
}
});

setTimeout(() => {
sliderWrapper.classList.remove('transition');
currentIndex = index;
updateDots(index);
}, 1000); 
}


function showNextSlide() {
if (currentIndex < 4) {
currentIndex += 3;
} else {
currentIndex = 0;
}
showSlide(currentIndex);
}

function showPrevSlide() {
   if (currentIndex >= 3) {
         currentIndex -= 3;
      } else {
         currentIndex = 6;
      }
showSlide(currentIndex);
}

function updateDots(index) {
dots.forEach((dot, i) => {
dot.classList.toggle('active', i === Math.floor(index / 3));
});
}

function dotClickHandler(dotIndex) {
currentIndex = dotIndex * 3;
showSlide(currentIndex);
}

dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
dotClickHandler(index);
});
});

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

showSlide(currentIndex);
setInterval(() => {
showNextSlide();
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
var questionBtns = document.querySelectorAll(".question");
var container = document.querySelector(".FAQ_container");

questionBtns.forEach(function (btn) {
btn.addEventListener("click", function () {
var faqContainer = btn.closest('.faq');
  
    var ptext = faqContainer.querySelector("#inside");

    if (ptext.style.display === "block") {
        ptext.style.display = "none";
    } else {
        ptext.style.display = "block";
    }
var pannel = btn.nextElementSibling;
pannel.classList.toggle("active");


var icon = btn.querySelector('.fa-angle-down');
icon.classList.toggle('rotated');

var expandedPanels = document.querySelectorAll('.pannel.active');
if (expandedPanels.length > 0) {
  container.style.height = (container.clientHeight + pannel.scrollHeight) + 'px';
} else if (window.innerWidth <1281)  {
    
  container.style.height = 700 + 'px';
}else{
    container.style.height = 450 + 'px';
}
});
});
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    var navigation = document.getElementById("navigation");
    navigation.classList.toggle("show");
});

let prevScrollPos = window.pageYOffset;
        const header = document.getElementById('main-header');
        const menuColor = document.getElementById('menu-toggle');
        if(window.innerWidth < 981){
        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                menuColor.style.backgroundColor = 'rgba(33, 33, 33, 1)';
                header.style.transform = 'translateY(0)';
            } else {
                menuColor.style.backgroundColor = 'rgba(33, 33, 33, 0.9)';
                header.style.backgroundColor = 'rgba(33, 33, 33, 0.9)';
                header.style.transform = 'translateY(-100%)';
            }

            prevScrollPos = currentScrollPos;
        };
    }
