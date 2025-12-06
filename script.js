
let slideIndex = 0;
let slideshowInterval = null;
const transitionTime = 3000;

function showSlides(containerId) {
    let i;

    let slides = document.querySelectorAll(`#${containerId} .mySlides`);

    if (slides.length === 0) return;


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }


    slides[slideIndex - 1].style.display = "block";
}


function handleDoubleClick() {

    if (slideshowInterval) {
        return;
    }
    

    slideIndex = 0; 

    slideshowInterval = setInterval(() => {
        showSlides("slideshow-masini-container");
    }, transitionTime);

 
    showSlides("slideshow-masini-container");

    document.getElementById('slideshow-titlu').removeEventListener('dblclick', handleDoubleClick);
}

showSlides("slideshow-masini-container");


const slideshowTitlu = document.getElementById('slideshow-titlu');
if (slideshowTitlu) {
    slideshowTitlu.addEventListener('dblclick', handleDoubleClick);
}