/* ----------------HOME---------------- */

/* -----------------HOME BTN----------------- */
const homeBtn = document.querySelector('.home-btn');
const shadowHome = document.querySelector('.shadow-home');

homeBtn.addEventListener('mouseover', () => {
    shadowHome.style.transform = 'scale(1.5)';
    shadowHome.style.opacity = '.5';
    shadowHome.style.transition = 'all 1s ease-in-out';
});

homeBtn.addEventListener('mouseleave', () => {
    shadowHome.style.transform = 'scale(1)';
    shadowHome.style.transition = 'all 1s ease-in-out';
});
