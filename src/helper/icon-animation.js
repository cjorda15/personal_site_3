import $ from 'jquery';

$(document).ready(() => {
  let lastScrollTop = 0;
  let current = -40;
  $(window).scroll(function(event) {
    if ($('.death-star-active').hasClass('death-star-active')) return;
    if (current >= 80) return;
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      if (!(current >= 75)) {
        current += 0.85;
        $('.about-1-icons-wrapper').css({ top: `${current}%` });
      } else {
        $('.death-star-not-active')
          .toggleClass('death-star-not-active')
          .toggleClass('death-star-active');
      }
    }
  });
});
