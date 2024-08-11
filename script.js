document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('show');
    });
});