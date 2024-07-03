"use strict";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".hero__panel"); // converting the items into an array

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1), //
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1), //auto slide after a little scoll
    end: () => "+=" + document.querySelector(".hero").offsetWidth,
  },
});
