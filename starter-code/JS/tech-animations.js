gsap.registerPlugin(ScrollTrigger);


/* --------------------VEHICLE GSAP------------------------ */
const vehicle = gsap.timeline({ defaults: { duration: 2 } });
vehicle
.from('.tech-title', {y: 65, opacity: 0})
.from('.vehicle-img-container', {x: -300, opacity: 0}, '-=1')
.from('.vehicle-one', {y: -65, opacity: 0}, '-=1.5')
.from('.vehicle-two', {y: -65, opacity: 0}, '-=1.5')
.from('.vehicle-three', {y: -65, opacity: 0}, '-=1.5')
.from('.vehicle-sub1', {scale: 1.5, opacity: 0}, '-=1.5')
.from('.vehicle-title',{scale: 1.5, opacity: 0}, '-=1.5')
.from('.vehicle-txt', {scale: 1.5, opacity: 0}, '-=1.5');

/* --------------------PORT GSAP------------------------ */
const port = gsap.timeline(
    {
    scrollTrigger: {
        trigger: '.port-img-container',
        start: 'top, center',
        endTrigger: '.port-txt',
        end: 'bottom, top'
    }
});

port
.from('.port-img-container', {duration: 2, x: -300, opacity: 0})
.from('.port-one',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.port-two',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.port-three',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.port-sub1',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.from('.port-title',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.from('.port-txt', {duration: 2, scale: 1.5, opacity: 0}, '-=1.5');

/* --------------------CAPSULE GSAP------------------------ */
const capsule = gsap.timeline(
    {
    scrollTrigger: {
        trigger: '.capsule-img-container',
        start: 'top, center',
        endTrigger: '.capsule-txt',
        end: 'bottom, top'
    }
});

capsule
.from('.capsule-img-container', {duration: 2, x: -300, opacity: 0})
.from('.capsule-one',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.capsule-two',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.capsule-three',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.capsule-sub1',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.from('.capsule-title',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.from('.capsule-txt', {duration: 2, scale: 1.5, opacity: 0}, '-=1.5');


