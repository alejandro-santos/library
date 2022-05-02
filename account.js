(function(){
    $('#msbo').on('click', function(){
      $('body').toggleClass('msb-x');
    });
  }());


  jQuery(document).ready(function(){    
    $("#field_5, #field_6").on("blur",function(){
      getname();
    }); 
  });
