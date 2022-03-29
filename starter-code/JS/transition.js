/* const btnTransition = document.querySelector('.btn-transition');
const bodyMoon = document.querySelector('.body-moon');
const bodyCrew = document.querySelector('.body-crew');
const bodyTechnology = document.querySelector('.body-technology'); */

window.addEventListener('load', () => {
    gsap.from('.body-home', { duration: 3, opacity: '0', ease: 'power1'});
});

window.addEventListener('load', () => {
    gsap.from('.body-moon', { duration: 3, opacity: '0', ease: 'power1'});
});

window.addEventListener('load', () => {
    gsap.from('.body-crew', { duration: 3, opacity: '0', ease: 'power1'});
});

window.addEventListener('load', () => {
    gsap.from('.body-technology', { duration: 3, opacity: '0', ease: 'power1'});
});
