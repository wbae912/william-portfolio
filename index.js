$(document).ready(function() {
  $('.hamburger-a').on('click', function(event) {
    event.preventDefault();
    let linkHref = $(this).attr('href');
    let navHeight = $('nav').outerHeight();
   

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - navHeight
    }, 500);
  });
});