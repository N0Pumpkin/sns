document.addEventListener('DOMContentLoaded', () => {
    // Scroll эффект для header
    const header = document.getElementById('header');
    function updateHeader() {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // ======== HAMBURGER / MOBILE NAV ========
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavBg = document.getElementById('mobileNavBg');
    const closeBurger = document.getElementById('closeBurger');

    if (burgerBtn && mobileNav && mobileNavBg && closeBurger) {
        burgerBtn.onclick = function() {
            mobileNav.classList.add('open');
            mobileNavBg.classList.add('show');
            document.body.classList.add('nav-open');
        };
        function closeMenu() {
            mobileNav.classList.remove('open');
            mobileNavBg.classList.remove('show');
            document.body.classList.remove('nav-open');
        }
        closeBurger.onclick = closeMenu;
        mobileNavBg.onclick = closeMenu;

        // Автоматически закрывать меню при клике на ссылку (для UX)
        mobileNav.querySelectorAll('a').forEach(link => {
            link.onclick = closeMenu;
        });
    }
});
