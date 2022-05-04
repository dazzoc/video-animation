// Section 1
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// Section 2
const section = document.querySelector('.section2');
const end = section.querySelector('h1');

// ScrollMagic
const controller = new ScrollMagic.Controller()

// Scenes
const scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
    // console.log(e);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos);
    video.currentTime = scrollpos;
}, 41.6);