//Script to run as soon as DOM of the page becomes safe to manipulate
$( document ).ready(function() {

//When Readmore is clicked, hide itself, show the more text by sliding down and its link
  $('.readmore').click(function (e)
  {
    //The # key is added in <a href="#"></a> which will make the browser go to the top of the page when clicked.
    //e. preventDefault is added to prevent the above from happening
    e.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readless').show();
    $('.readmore').hide();
  }
  );

//When ReadLess is clicked, hideitself, hide the more text by sliding up and show ReadMore
$('.readless').click(function (e)
{
  //The # key is added in <a href="#"></a> which will make the browser go to the top of the page when clicked.
  //e. preventDefault is added to prevent the above from happening
  e.preventDefault();
  $('#show-this-on-click').slideUp();
  $('.readless').hide();
  $('.readmore').show();
}
);

//When Learnmore is clicked, hide itself, show the more text by sliding down
$('.learnmore').click(function (e)
{
  //The # key is added in <a href="#"></a> which will make the browser go to the top of the page when clicked.
  //e. preventDefault is added to prevent the above from happening
  e.preventDefault();
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
}
);

});
