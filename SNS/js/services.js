// Аккордеон для лабораторных услуг
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.acc-parent').forEach(card => {
        const toggle = card.querySelector('.acc-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                card.classList.toggle('active');
            });
        }
    });
});
