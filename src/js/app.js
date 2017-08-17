$(() => {

  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
  });
  // $('.cl-effect-6 li a').click(function() {
  //   $('.cl-effect-6 li a').removeClass('active');
  //   $(this).addClass('active');
  // });
  $('.img-pro-1').hover(function() {
    $('.pro-1-text').toggleClass('hidden');
    console.log('yay');
  });
  $('.img-pro-2').hover(function() {
    $('.pro-2-text').toggleClass('hidden');
    console.log('yay');
  });
  $('.img-pro-3').hover(function() {
    $('.pro-3-text').toggleClass('hidden');
    console.log('yay');
  });
  $('.img-pro-4').hover(function() {
    $('.pro-4-text').toggleClass('hidden');
    console.log('yay');
  });

});
