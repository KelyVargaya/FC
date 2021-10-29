(function ($) {
  "use strict";

  $(document).ready(function(){
    $('.venobox').venobox({
      overlayColor: 'rgb(0 0 0 / 60%)',
      closeBackground: '',
      spinner: 'cube-grid',
      spinColor: '#00abec'    ,
      closeColor: '#fff',
      closeBackground: '#00abec',
      share: false
    });
  });


// Mobile STANDS
if ($('#bottom-accesos').length) {
  var $mobile_nav = $('#bottom-accesos').clone().prop({
    id: 'mobile-nav'
  });
  $mobile_nav.find('> ul').attr({
    'class': '',
    'id': ''
  });
  $('body').append($mobile_nav);
  $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="icofont-navigation-menu"></i></button>');
  $('body').append('<span class="aviso-menu">Selecciona tu stand</span>');
  $('body').append('<div id="mobile-body-overly"></div>');

  $(document).on('click', '#mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('#mobile-nav-toggle i').toggleClass('icofont-ui-close icofont-navigation-menu');
    $('#mobile-body-overly').toggle();
  });

} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
  $("#mobile-nav, #mobile-nav-toggle").hide();
}


})(jQuery);


