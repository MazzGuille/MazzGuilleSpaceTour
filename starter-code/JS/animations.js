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

const home = gsap.timeline({defaults: {duration: .3}});
home
.from('.so-s',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.so-o',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.coma',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.you-y',{ y: '-500%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.you-o',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.you-u',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-w',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-a',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-n',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.w-t',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.to-t',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.to-o',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-t',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-r',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-a',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-v',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-e',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.tr-l',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.t-t',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.t-o',{ y: '-100%', opacity: 0, ease: 'elastic.out(3, .5)'})
.from('.home-h1', { duration: 3, opacity: '0', ease: 'power1', transform: 'scale(.1)'})
.from('.home-txt',{duration: '3', opacity: 0, ease: "slow(0.7, 0.7, false)"})
;








