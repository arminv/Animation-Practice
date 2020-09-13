const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

// What to anumate, how long (in seconds), and start and end positions:
// We can chain multiple animations too:
tl.fromTo(hero, 1, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: '100%' },
    { width: '80%', ease: Power2.easeInOut }
  )
  // '-=1.2' means we start this animation at the same time as the one before it (think timeline!):
  .fromTo(
    slider,
    1.2,
    { x: '-100%' },
    { x: '0%', ease: Power2.easeInOut },
    '-=1.2'
  )
  .fromTo(
    logo,
    0.5,
    { opacity: 0, x: '-100%' },
    { opacity: 1, x: '0%', ease: Power2.easeInOut },
    '-=0.5'
  )
  .fromTo(
    hamburger,
    0.5,
    { opacity: 0, x: '-100%' },
    { opacity: 1, x: '0%', ease: Power2.easeInOut },
    '-=0.5'
  )
  .fromTo(
    headline,
    0.5,
    { opacity: 0, x: '-100%' },
    { opacity: 1, x: '0%', ease: Power2.easeInOut },
    '-=0.5'
  );
