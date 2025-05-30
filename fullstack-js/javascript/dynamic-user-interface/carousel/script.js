const track = document.getElementById('carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
}

next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
    console.log('test');
});

prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});
