const moon = gsap.timeline({defaults: {duration: 3}});
moon
.fromTo('.moon-heading', {opacity: 0, scale: 0, rotation: 720}, {duration: 1, opacity: 1, scale: 1, rotation: 0})
.from('.pos-moon', {x: -400, ease: "bounce"})
.from('.moon-img', {scale: 0, x: 300, ease: "power4.out"}, '-=1.5')
.from('.moon-title', {opacity: 0}, "-=2")
.from('.moon-txt', {opacity: 0}, '-=2');



const moonTxt = gsap.timeline({
scrollTrigger:{
    trigger: '.moon-bot',
    start: 'center, bottom',
    }
}); 
moonTxt
.from('.moon-dist', {duration: 3, opacity: 0})
.from('.moon-time', {duration: 3, opacity: 0});


/* const mars = gsap.timeline({
    scrollTrigger: {

    }
}); */