const btnTransition = document.querySelector('.home-btn');
const bodyHome = document.querySelector('.body-home');
const bodyMoon = document.querySelector('.body-destination');

btnTransition.addEventListener('mouseover', () => {
    bodyHome.style.opacity = '.1';
    bodyHome.style.transition = 'opacity 1.5s ease';
    bodyMoon.style.opacity = '.1';
    bodyMoon.style.transition = 'opacity 1.5s ease';
})