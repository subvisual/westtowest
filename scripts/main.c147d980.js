$(function(){function a(){j=!0}function b(){if(j){var a=$(document).scrollTop();j=!1,e(k,a,f)||(k=a,(c(a)&&!i.hasClass(h)||!c(a)&&i.hasClass(h))&&d())}}function c(a){return f>a}function d(){i.toggleClass(h)}function e(a,b,c){return Math.abs(a-b)<=c}const f=50,g=".Nav",h="Nav--onTop";var i=$(g),j=!1,k=0;setInterval(b,300),window.onscroll=a,setTimeout(a,f)}),$(function(){function a(){d.toggleClass(c),g.toggleClass(b)}const b="is-hidden",c="u-noScroll";var d=$("body"),e=$(".Overlay-close"),f=$(".Nav-burger"),g=$(".Overlay"),h=$(".Overlay-link");e.click(a),f.click(a),h.click(a)});