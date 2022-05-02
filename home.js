$(document).ready(function(){
    $("#advanced_link").click(function(){
        if ($('#moresearch').css("display") == 'none')
      $("#moresearch").css("display", "block");
      else
      $('#moresearch').css('display', "none");
    });
  });
