import $ from 'jquery';

$(document).ready(() => {
  let lastScrollTop = 0;
  let current = -40;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      if (!(current >= 75)) {
        current += 1;
      }
      $('.about-1-icons').css({ color: `black` });
      $('.about-1-icons-wrapper').css({ top: `${current}%`, color: 'black' });
    }
    //   else {
    //     if (!(current <= -40)) {
    //       current -= 1;
    //     }
    //     // $('.about-1-icons').animate({ color: `red` });
    //     $('.about-1-icons-wrapper').css({ left: `${current}%` });
    //   }
    //   lastScrollTop = st;
    // });
  });
});
