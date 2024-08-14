// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('show');
    });
});

function toggleAnswer(answerId, questionElement) {
    var answerElement = document.getElementById(answerId);
    var iconElement = questionElement.querySelector('.icon');
    if (answerElement.classList.contains('show')) {
        answerElement.classList.remove('show');
        iconElement.textContent = '+';
        iconElement.style.transform = 'rotate(0deg)';
    } else {
        answerElement.classList.add('show');
        iconElement.textContent = '-';
        iconElement.style.transform = 'rotate(5deg)';
    }
}


document.addEventListener('scroll', function() {
    const navPanel = document.getElementById('navPanel');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navPanel.classList.add('show');
    } else {
        navPanel.classList.remove('show');
        closeMenu();
    }
});

document.getElementById('hamburgerButton').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburgerButton');

    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
});


function closeMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburgerButton');

    menu.classList.remove('show');
    hamburger.classList.remove('active');
}