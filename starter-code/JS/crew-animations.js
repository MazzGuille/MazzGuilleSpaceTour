gsap.registerPlugin(ScrollTrigger);


/* --------------------COMMANDER GSAP------------------------ */
const commander = gsap.timeline({ defaults: { duration: 2 } });
commander
.from('.crew-title', {y: -65, opacity: 0})
.from('.commander-img-container', {opacity: 0}, '-=1.5')
.from('.commander-img',  {y: 65, opacity: 0}, '-=1.5')
.from('.dot-container-commander', {opacity: 0}, '-=1.5')
.from('.commander-title',{x: -80}, '-=1.5')
.from('.commander-name',{x: 80}, '-=1.5')
.from('.commander-txt', {opacity: 0}, '-=1.5');

/* --------------------SPECIALIST GSAP------------------------ */
const specialist = gsap.timeline(
    {
    scrollTrigger: {
        trigger: '.specialist-img-container',
        start: 'top, center',
        endTrigger: '.moon-time',
        end: 'bottom, top',
        toggleActions: "restart",
    }
});

specialist
.from('.specialist-img-container', {duration: 2, opacity: 0})
.from('.specialist-img',  {duration: 2, y: 65, opacity: 0}, '-=1.5')
.from('.dot-container-specialist', {duration: 2, opacity: 0}, '-=1.5')
.from('.specialist-title',{duration: 2, x: -80}, '-=1.5')
.from('.specialist-name',{duration: 2, x: 80}, '-=1.5')
.from('.specialist-txt', {duration: 2, opacity: 0}, '-=1.5');

/* --------------------PILOT GSAP------------------------ */
const pilot = gsap.timeline(
    {
    scrollTrigger: {
        trigger: '.pilot-img-container',
        start: 'top, center',
        endTrigger: '.moon-time',
        end: 'bottom, top',
        toggleActions: "restart",
    }
});

pilot
.from('.pilot-img-container', {duration: 2, opacity: 0})
.from('.pilot-img',  {duration: 2, y: 65, opacity: 0}, '-=1.5')
.from('.dot-container-pilot', {duration: 2, opacity: 0}, '-=1.5')
.from('.pilot-title',{duration: 2, x: -80}, '-=1.5')
.from('.pilot-name',{duration: 2, x: 80}, '-=1.5')
.from('.pilot-txt', {duration: 2, opacity: 0}, '-=1.5');

/* --------------------ENGINEER  GSAP------------------------ */
const engineer = gsap.timeline(
    {
    scrollTrigger: {
        trigger: '.engineer-img-container',
        start: 'top, center',
        endTrigger: '.moon-time',
        end: 'bottom, top',
        toggleActions: "restart",
    }
});

engineer
.from('.engineer-img-container', {duration: 2, opacity: 0})
.from('.engineer-img',  {duration: 2, y: 65, opacity: 0}, '-=1.5')
.from('.dot-container-engineer', {duration: 2, opacity: 0}, '-=1.5')
.from('.engineer-title',{duration: 2, x: -80}, '-=1.5')
.from('.engineer-name',{duration: 2, x: 80}, '-=1.5')
.from('.engineer-txt', {duration: 2, opacity: 0}, '-=1.5')
.from('.home-btn', { duration: 3, scale: 0 });
