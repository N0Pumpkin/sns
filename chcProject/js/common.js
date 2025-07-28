document.addEventListener('DOMContentLoaded', () => {
    // Гамбургер-меню
    const navFlex = document.querySelector('.nav-flex');
    if (!navFlex) return;

    const burger = document.createElement('div');
    burger.className = 'burger';
    burger.innerHTML = '&#9776;';
    navFlex.appendChild(burger);

    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);

    const userMenu = document.createElement('div');
    userMenu.className = 'user-menu';
    userMenu.innerHTML = `
        <div class="user-menu-close">&times;</div>
        <ul>
            <li><a href="index.html">Главная</a></li>
            <li><a href="services.html">Услуги</a></li>
            <li><a href="projects.html">Проекты</a></li>
            <li><a href="aboutUs.html">О компании</a></li>
            <li><a href="contact.html">Контакты</a></li>
        </ul>
    `;
    document.body.appendChild(userMenu);

    const toggleMenu = (open) => {
        userMenu.classList.toggle('open', open);
        menuOverlay.classList.toggle('visible', open);
    };

    burger.addEventListener('click', () => toggleMenu(true));
    menuOverlay.addEventListener('click', () => toggleMenu(false));
    userMenu.querySelector('.user-menu-close').addEventListener('click', () => toggleMenu(false));
});
