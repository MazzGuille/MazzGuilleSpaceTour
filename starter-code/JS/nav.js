const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu-container');

ham.addEventListener('click', () => {
    menu.classList.toggle('hide');
    gsap.from('.menu-container', { duration: .5, x: '100%', ease: 'power1'});
   });