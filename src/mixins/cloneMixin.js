import $ from 'jquery';

export function cloneElements() {

  // Clone and append .mil-arrow
  $(".mil-arrow").clone().appendTo(".mil-arrow-place");

  // Clone and append .mil-dodecahedron
  $(".mil-dodecahedron").clone().appendTo(".mil-animation");

  // Clone and append .mil-lines
  $(".mil-lines").clone().appendTo(".mil-lines-place");

  // Clone and append the current page link
  $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
}