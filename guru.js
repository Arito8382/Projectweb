let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function moveToSlide(index) {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');

    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
}