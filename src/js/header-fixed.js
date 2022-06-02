const smoothAnchors = document.querySelectorAll('[data-link]');

const header = document.querySelector('.header-js');

for (let anchor of smoothAnchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const anchorID = anchor.getAttribute('href');
    const scrollOffset = document.querySelector(anchorID).offsetTop;
    window.scrollTo({
      top: scrollOffset - header.offsetHeight,
      behavior: 'smooth',
    });
  });
}
$(window).on('scroll', function () {
  $(header).toggleClass('fixed', $(this).scrollTop() > $('.hero-js').height());
});

var elem = $('body >header');
var doc = $(document);
function scrolled() {
  var threshold = doc.scrollTop() > 300;
  elem.toggleClass('scrolled-tab', threshold);
  var threshold = doc.scrollTop() > 400;
  elem.toggleClass('scrolled', threshold);
  var threshold = doc.scrollTop() > 600;
  elem.toggleClass('scrolled-desk', threshold);
}
$(window).on({ scroll: scrolled });
