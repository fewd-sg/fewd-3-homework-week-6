
$('#para1').css('display', 'none')

$(".readmore").click(function () {
  	$("#para1").slideToggle()
  	$(".readmore").hide()
  	$(".readless").show()
})

$(".readless").click(function () {
  	$("#para1").slideToggle()
  	$(".readless").hide()
  	$(".readmore").show()
})

$(".learnmore").click(function () {
	$("#learnmoretext").show()
  	$(".learnmore").slideDown().hide()
})