const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const counter = document.getElementById("counter");
const dotsContainer = document.getElementById("dots");

// Create Dots
images.forEach((image, index) => {
    dotsContainer.innerHTML += `<span class="dot" onclick="showImage(${index})"></span>`;
});

const dots = document.querySelectorAll(".dot");

// Show Image
function showImage(index){

    currentIndex = index;

    sliderImage.src = images[currentIndex];

    updateCounter();

    updateDots();
}

// Next Slide
function nextSlide(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);
}

// Previous Slide
function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
}

// Auto Slide
function autoSlide(){
    nextSlide();
}

// Counter
function updateCounter(){
    counter.innerHTML = `Image ${currentIndex + 1} of ${images.length}`;
}

// Active Dot
function updateDots(){

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

// First Image
showImage(currentIndex);

// Auto Slide Every 3 Seconds
setInterval(autoSlide,3000);