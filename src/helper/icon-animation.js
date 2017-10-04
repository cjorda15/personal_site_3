import $ from 'jquery';

$(document).ready(() => {
  let lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      console.log('down');
    } else {
      console.log('up');

      // upscroll code
    }
    lastScrollTop = st;
  });

  $(window).scroll(e => {});
});
