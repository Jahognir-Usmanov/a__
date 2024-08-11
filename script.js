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