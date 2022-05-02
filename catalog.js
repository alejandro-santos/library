var $grid = $('.grid').isotope({
    itemSelector: '.book-subject',
    layoutMode: 'masonry'
  });
  
  
  $('.filters').on( 'click', 'a', function(e) {
    var bookSubject = $( this ).attr('data-filter');
    $grid.isotope({ filter: bookSubject });
    $('.filters > a').removeClass('selected');
    $(e.currentTarget).addClass('selected');
  });
  
  