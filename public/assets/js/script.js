/*trixia script*/

$(document).ready(function(){
    $('.nav-btn').click(function(){
        $('a.nav-btn').removeClass("active");
        $(this).addClass("active");
    });
});

(function(){
 
  $('dd').filter(':nth-child(n+4)').addClass('hide');

  $('dl').on('click', 'dt', function() {
      $(this).next().slideToggle(200);
    });
  
 })();