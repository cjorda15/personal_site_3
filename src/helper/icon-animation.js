import $ from 'jquery';

$(document).ready(() => {
  let lastScrollTop = 0;
  let current = -10;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      if (!(current >= 75)) {
        current += 1;
      }
      // $('.about-1-icons').css({ color: `black` });
      $('.about-1-icons-wrapper').css({ left: `${current}%`, color: 'black' });
    } else {
      if (!(current <= -10)) {
        current -= 1;
      }
      // $('.about-1-icons').animate({ color: `red` });
      $('.about-1-icons-wrapper').css({ left: `${current}%`, color: 'red' });
    }
    lastScrollTop = st;
  });

  $(window).scroll(e => {});
});
