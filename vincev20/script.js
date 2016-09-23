
var $slidingText = $("#slidingText")
var $readMoreLink = $(".readmore")
var $readLessLink = $(".readless")
var $extraText = $("#show-this-on-click")

var $learnMoreLink = $(".learnmore")
var $learnMoreText = $("#learnmoretext")

var $learnLessLink = $(".learnless")


$readMoreLink.click(function(){
	$extraText.slideDown()
	$slidingText.slideUp()
	$readMoreLink.hide()
	$readLessLink.show()
})

$readLessLink.click(function(){
	$extraText.slideUp()
	$slidingText.slideDown()
	$readLessLink.hide()
	$readMoreLink.show()
})

$learnMoreLink.click(function(){
	$learnMoreLink.hide()
	$learnMoreText.slideDown()
	$learnLessLink.show()
})

$learnLessLink.click(function(){
	$learnLessLink.hide()
	$learnMoreText.slideUp()
	$learnMoreLink.show()
})