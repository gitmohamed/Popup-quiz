$(function(){
  $(window).on('load', function(){
    $('.popup').animate({'opacity': '1', 'bottom': '0'}, 200);
    setTimeout(function(){
      $('.popup-inner').fadeIn();
    }, 210);
  });
  $(document.body).on('click', '.close', function(){
    $('.popup-inner').slideToggle();
    setTimeout(function(){
      $('.popup').fadeOut(330);
    });
  });
});
