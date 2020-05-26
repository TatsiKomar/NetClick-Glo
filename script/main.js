const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// открытие/закрытие меню
hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    const targer = event.target;
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});
leftMenu.addEventListener('click', event => {
    const targer = event.target;
    const dropdown = targer.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
});