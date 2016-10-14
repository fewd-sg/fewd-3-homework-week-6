$(".readmore").click(readMore);
$(".readless").click(readLess);
$(".learnmore").click(learnMore);
function readMore() {
  $("#show-this-on-click").slideDown('slow');
  $(".readless").show();
  $(".readmore").hide();
  return false;
}
function readLess() {
  $("#show-this-on-click").slideUp('slow', function (){
    $(".readmore").show();
    $(".readless").hide();
  });
  return false;
}
function learnMore() {
  $(".learnmore").hide();
  $("#learnmoretext").slideDown('slow');
  return false;
}
