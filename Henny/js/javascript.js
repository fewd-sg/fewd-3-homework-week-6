
$(".readmore").click(function(){
$("show-this-on-click").show();
$("p").slideDown();
$(".readmore").hide();
});

$(".readless").click(function(){
$("#show-this-on-click").slideUp();
$(".readmore").show();
$(".readless").hide();
});


$(".learnmore").click(function(){
$("#learnmoretext").slideDown();
$(".learnmore").hide();
});
