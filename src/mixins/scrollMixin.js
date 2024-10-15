import { gsap } from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  const appearance = document.querySelectorAll(".mil-up");

  appearance.forEach((section) => {
    gsap.fromTo(section, {
      opacity: 0,
      y: 40,
      scale: .98,
      ease: 'sine',

    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: .4,
      scrollTrigger: {
        trigger: section,
        toggleActions: 'play none none reverse',
      }
    });
  });

  const scaleImage = document.querySelectorAll(".mil-scale");

  scaleImage.forEach((section) => {
    var value1 = $(section).data("value-1");
    var value2 = $(section).data("value-2");
    gsap.fromTo(section, {
      ease: 'sine',
      scale: value1,

    }, {
      scale: value2,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
  });

  const parallaxImage = document.querySelectorAll(".mil-parallax");


  if ($(window).width() > 960) {
    parallaxImage.forEach((section) => {
      var value1 = $(section).data("value-1");
      var value2 = $(section).data("value-2");
      gsap.fromTo(section, {
        ease: 'sine',
        y: value1,

      }, {
        y: value2,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: 'play none none reverse',
        }
      });
    });
  }

  const rotate = document.querySelectorAll(".mil-rotate");

  rotate.forEach((section) => {
    var value = $(section).data("value");
    gsap.fromTo(section, {
      ease: 'sine',
      rotate: 0,

    }, {
      rotate: value,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
  });
}

export function AnchorScroll(targetId) {
  const target = document.querySelector(targetId);

  if (target) {
    // Calculate the offset based on window width
    const offset = window.innerWidth < 1200 ? 90 : 0;

    // Get the target's position relative to the top of the document
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    // Smooth scrolling
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

export function PageChangeScroll() {
  // Scroll to the top of the page instantly
  window.scrollTo(0, 0);

  // Animate the progress bar height to 0
  gsap.to('.mil-progress', {
    height: 0,
    ease: 'sine',
    onComplete: () => {
      ScrollTrigger.refresh(); // Refresh ScrollTrigger after animation
    },
  });
}
