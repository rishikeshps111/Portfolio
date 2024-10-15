import Swup from 'swup';
import $ from 'jquery';
import { gsap } from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
import ScrollToPlugin from "gsap/ScrollToPlugin"; 

const options = {
    containers: ['#swupMain', '#swupMenu'],
    animateHistoryBrowsing: true,
    linkSelector: 'a:not([data-no-swup])',
    animationSelector: '[class="mil-main-transition"]'
};
const swup = new Swup(options);
console.log("Swup initialized");

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function ReInit() {
    document.addEventListener("swup:contentReplaced", function () {
        console.log('swup:contentReplaced event fired');
        $('html, body').animate({
            scrollTop: 0,
        }, 0);

        gsap.to('.mil-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                ScrollTrigger.refresh()
            },
        });
        /***************************
 
         menu
 
        ***************************/
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');
        /***************************
 
        append
 
        ***************************/
        $(document).ready(function () {
            $(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-current-page a").remove();
            $(".mil-arrow").clone().appendTo(".mil-arrow-place");
            $(".mil-dodecahedron").clone().appendTo(".mil-animation");
            $(".mil-lines").clone().appendTo(".mil-lines-place");
            $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
        });
       

    });
}