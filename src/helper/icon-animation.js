import $ from 'jquery';

$(document).ready(() => {
  let lastScrollTop = 0;
  let current = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      if (!(current >= 85)) {
        current += 1;
      }
      // $('.about-1-icons').animate({ color: `black` });
      $('.about-1-icons-wrapper').css({ left: `${current}%` });
    } else {
      if (!(current <= 0)) {
        current -= 1;
      }
      // $('.about-1-icons').animate({ color: `red` });
      $('.about-1-icons-wrapper').css({ left: `${current}%` });
    }
    lastScrollTop = st;
  });

  $(window).scroll(e => {});
});
