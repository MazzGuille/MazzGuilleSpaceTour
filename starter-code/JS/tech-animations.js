gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


/* --------------------VEHICLE GSAP------------------------ */
const vehicle = gsap.timeline({ defaults: { duration: 2 } });
vehicle
.from('.tech-title', {y: 65, opacity: 0})
.from('.vehicle-img-container', {scale: 0, opacity: 0}, '-=1')
.from('.vehicle-one', {y: -65, opacity: 0}, '-=1.5')
.from('.vehicle-two', {y: -65, opacity: 0}, '-=1.5')
.from('.vehicle-three', {y: -65, opacity: 0}, '-=1.5')
.from('.vehicle-sub1', {scale: 1.5, opacity: 0}, '-=1.5')
.from('.vehicle-title',{scale: 1.5, opacity: 0}, '-=1.5')
.to('.vehicle-txt', {duration: 10, text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", ease: "power2.out"}, '-=1');

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
.from('.port-img-container', {duration: 2, scale: 0, opacity: 0})
.from('.port-one',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.port-two',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.port-three',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.port-sub1',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.from('.port-title',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.to('.port-txt', {duration: 10, text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.", ease: "power2.out"}, '-=1');

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
.from('.capsule-img-container', {duration: 2, scale: 0.1, opacity: 0})
.from('.capsule-one',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.capsule-two',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.capsule-three',  {duration: 2, y: -65, opacity: 0}, '-=1.5')
.from('.capsule-sub1',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.from('.capsule-title',{duration: 2, scale: 1.5, opacity: 0}, '-=1.5')
.to('.capsule-txt', {duration: 10, text: " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", ease: "power2.out"}, '-=1');


