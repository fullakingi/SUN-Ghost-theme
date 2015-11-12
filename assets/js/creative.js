(function($) {
    "use strict";

    $('.slider-toggle').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('slider-on');
    });
    
    $(document)
      .on('submit', '.sideform', function() {
        var all_passed = true;
        
        if($('.forced', $(this)).val() != 'true') {
          $('input, select', $(this)).each(function() {
            if(!$(this).val()) {
              all_passed = false;
              return;
            }
          });
        }

        if(!all_passed) {
          $('.popup').fadeIn();
          $('.free-tshirt')
            .clone()
            .show()
            .appendTo($('.popup'))
          ;

          return false;
        }
      })
      .on('click', '.free-tshirt button', function() {
        if($(this).attr('rel') == 'no') {
          $('.sideform')
            .append('<input type="hidden" class="forced" value="true" />')
            .submit()
          ;
        } else {
          $('.popup').fadeOut(function() {
            $('.popup').html('');
          });
        }
      });
      
})(jQuery);
