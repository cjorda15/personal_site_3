import $ from 'jquery';

$(document).ready(() => {
  let lastScrollTop = 0;
  let current = -40;
  $(window).scroll(function(event) {
    if (current >= 80) return;
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      if (!(current >= 75)) {
        current += 1.5;
        $('.about-1-icons-wrapper').css({ top: `${current}%` });
      }
    }
  });
});
