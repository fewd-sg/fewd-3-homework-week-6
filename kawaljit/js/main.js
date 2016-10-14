// document.querySelector('')
$('.readmore a').click(
  function(){
    event.preventDefault();
    $('#show-this-on-click').slideDown().show();
    $('.readmore a').hide();
    $('.readless').show();
  }
);

$('.readless').click(
  function(){
    event.preventDefault();
    $('#show-this-on-click').slideUp().hide();
    $('.readmore a').show();
    $('.readless').hide();
  }
);

$('.learnmore ').click(
  function(){
    event.preventDefault();
    $('#learnmoretext').slideDown().show();
    $('.learnmore').hide();
  }
);
