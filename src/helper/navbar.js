// import $ from 'jquery';
//
// $(document).ready(() => {
//   $('#scroll-to-about').click(function() {
//     // $('#scroll-to-about').hide();
//     $('html, body').animate(
//       {
//         scrollTop: $('#about-1-background').offset().top
//       },
//       2000
//     );
//   });
//   const toggles = document.querySelectorAll('.c-hamburger');
//
//   const menu = $('.c-hamburger');
//
//   menu.on('click', '.nav-link', function() {
//     console.log($(this));
//     console.log($(this).hasClass('is-active'));
//   });
//
//   // navLinks.click(function() {
//   //   console.log('@@@@@');
//   //   $('.c-hamburger').toggleClass('is-active');
//   // });
//
//   for (var i = toggles.length - 1; i >= 0; i--) {
//     const toggle = toggles[i];
//     toggleHandler(toggle);
//   }
//   function toggleHandler(toggle) {
//     toggle.addEventListener('click', function(e) {
//       e.preventDefault();
//       this.classList.contains('is-active') === true
//         ? this.classList.remove('is-active')
//         : this.classList.add('is-active');
//     });
//   }
// });
