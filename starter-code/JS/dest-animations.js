gsap.registerPlugin(ScrollTrigger);

const moon = gsap.timeline({ defaults: { duration: 3 } });
moon
    .fromTo('.moon-heading', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, opacity: 1, scale: 1, rotation: 0 })
    .from('.pos-moon', { x: -400, ease: "bounce" })
    .from('.moon-img', { scale: 0, x: 300, ease: "power4.out" }, '-=1.5')
    .from('.moon-title', { opacity: 0 }, "-=2")
    .from('.moon-txt', { opacity: 0 }, '-=2');

/* -----------------------MOON GSAP----------------------- */

const moonTxt = gsap.timeline({
    scrollTrigger: {
        trigger: '.moon-dist',
        start: 'center, bottom',
        endTrigger: '.moon-time',
        end: 'bottom, top',
        toggleActions: "restart",
    }
});
moonTxt
    .from('.moon-dist', { duration: 3, opacity: 0 })
    .from('.moon-time', { duration: 3, opacity: 0 }, '-=1.5');

/* ---------------------MARS GSAP--------------------- */

gsap.from('.mars-img', {
    scrollTrigger: {
        trigger: '.mars-img',
        toggleActions: "restart pause reverse pause",
        start: 'top, bottom',
        scrub: true
    },
    opacity: 0.1,
    scale: 0,
    duration: 3
});

const marsContent = gsap.timeline({
    scrollTrigger: {
        trigger: '.mars-img',
        start: 'bottom, center',
        endTrigger: '.mars-txt',
        end: 'bottom, center',
        toggleActions: "restart",
    }
});
marsContent
    .from('.mars-anim', { duration: 1.5, y: 50, opacity: 0 })
    .from('.mars-title', { duration: 1.5, y: 50, opacity: 0 })
    .from('.mars-txt', { duration: 1.5, y: 50, opacity: 0 });

const marsBot = gsap.timeline({
    scrollTrigger: {
        trigger: '.mars-bot',
        start: 'top, center',
        toggleActions: "restart"
    }
});
marsBot
    .from('.mars-dist', { duration: 1.5, x: 45, opacity: 0 })
    .from('.mars-time', { duration: 1.5, x: -45, opacity: 0 });

/* ---------------------EUROPA GSAP--------------------- */
gsap.from('.europa-img', {
    scrollTrigger: {
        trigger: '.europa-img',
        toggleActions: "restart pause reverse pause",
        start: 'top, bottom',
        scrub: true
    },
    opacity: 0.1,
    scale: 0,
    x: -125,
    y: -125,
    duration: 3
});

const europaContent = gsap.timeline({
    scrollTrigger: {
        trigger: '.europa-img',
        start: 'bottom, center',
        endTrigger: '.europa-txt',
        end: 'bottom, center',
        toggleActions: "restart",
    }
});
europaContent
    .from('.europa-anim', { duration: 1.5, y: 50, opacity: 0 })
    .from('.europa-title', { duration: 1.5, y: 50, opacity: 0 })
    .from('.europa-txt', { duration: 1.5, y: 50, opacity: 0 });

const europaBot = gsap.timeline({
    scrollTrigger: {
        trigger: '.europa-bot',
        start: 'top, center',
        toggleActions: "restart"
    }
});
europaBot
    .from('.europa-dist', { duration: 1.5, x: 45, opacity: 0 })
    .from('.europa-time', { duration: 1.5, x: -45, opacity: 0 });

/* ---------------------TITAN GSAP--------------------- */
gsap.from('.titan-img', {
    scrollTrigger: {
        trigger: '.titan-img',
        toggleActions: "restart pause reverse pause",
        start: 'top, bottom',
        scrub: true
    },
    opacity: 0.1,
    scale: 0,
    x: 125,
    y: 125,
    duration: 3
});

const titanContent = gsap.timeline({
    scrollTrigger: {
        trigger: '.titan-img',
        start: 'bottom, center',
        endTrigger: '.titan-txt',
        end: 'bottom, center',
        toggleActions: "restart",
    }
});
titanContent
    .from('.titan-anim', { duration: 1.5, y: 50, opacity: 0 })
    .from('.titan-title', { duration: 1.5, y: 50, opacity: 0 })
    .from('.titan-txt', { duration: 1.5, y: 50, opacity: 0 });

const titanBot = gsap.timeline({
    scrollTrigger: {
        trigger: '.titan-bot',
        start: 'top, center',
        toggleActions: "restart"
    }
});
titanBot
    .from('.titan-dist', { duration: 1.5, x: 45, opacity: 0 })
    .from('.titan-time', { duration: 1.5, x: -45, opacity: 0 })
    .from('.home-btn', { duration: 3, scale: 0});