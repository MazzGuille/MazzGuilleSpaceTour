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

/* --------------------HOME TXT------------------- */



/* ----------------HOME H5/H1----------------- */

const home = gsap.timeline()
home
.from('.so-s',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.so-o',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.coma',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.you-y',{duration: '.3', y: '-500%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.you-o',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.you-u',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-w',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-a',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-n',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-t',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.to-t',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.to-o',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-t',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-r',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-a',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-v',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-e',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-l',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.t-t',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.t-o',{duration: '.3', y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.home-h1', { duration: 3, opacity: '0', ease: 'power1', transform: 'scale(.1)'})
.from('.home-txt',{duration: '3', opacity: 0, ease: "slow(0.7, 0.7, false)"})
;






