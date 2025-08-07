document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('partnersWrapper');
    const carousel = document.getElementById('partnersCarousel');
    let isDown = false;
    let startX, scrollLeft;
    let isHovered = false;

    // Клонируем карточки 150 раз
    function cloneCardsForLoop(times = 1000) {
        const originals = Array.from(carousel.children);
        for (let t = 0; t < times - 1; t++) { // уже есть 1 оригинальный набор
            originals.forEach(card => {
                carousel.appendChild(card.cloneNode(true));
            });
        }
    }
    cloneCardsForLoop(1000); // можно больше

    // Автоскролл
    const card = carousel.querySelector('.partner-card');
    let cardFullWidth = card.offsetWidth + 56; // gap = 56px
    let totalCards = carousel.children.length;

    function autoScroll() {
        if (!isDown && !isHovered) {
            wrapper.scrollLeft += 1;
            // Когда реально дошёл до конца — прыгнуть в начало
            if (wrapper.scrollLeft >= cardFullWidth * totalCards) {
                wrapper.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll);
    }
    autoScroll();

    // Hover pause
    wrapper.addEventListener('mouseenter', () => { isHovered = true; });
    wrapper.addEventListener('mouseleave', () => { isHovered = false; });

    // Drag'n'Drop
    wrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
        wrapper.style.cursor = 'grabbing';
    });
    wrapper.addEventListener('mouseleave', () => {
        isDown = false;
        wrapper.style.cursor = 'grab';
    });
    wrapper.addEventListener('mouseup', () => {
        isDown = false;
        wrapper.style.cursor = 'grab';
    });
    wrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 2.5;
        wrapper.scrollLeft = scrollLeft - walk;
        if (wrapper.scrollLeft >= cardFullWidth * totalCards) {
            wrapper.scrollLeft = 0;
        }
        if (wrapper.scrollLeft <= 0) {
            wrapper.scrollLeft = cardFullWidth * totalCards - 1;
        }
    });

    wrapper.style.cursor = 'grab';
});
