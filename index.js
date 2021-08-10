$('.tab a').on('click', function (e) {
        
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
      
    target = $(this).attr('href');
     $(target).siblings().addClass('hideBlock').delay(300).fadeOut(300);
     $(target).fadeIn(200).removeClass('hideBlock');
  });
  