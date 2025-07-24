// fade-in секций при скролле (для красоты)
document.querySelectorAll('.fade-in').forEach(el => {
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.disconnect();
                }
            });
        }).observe(el);
    } else {
        el.classList.add('visible');
    }
});
