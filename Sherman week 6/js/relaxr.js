$(".readmore").click(function () {
  $('.hide').slideDown()
  $('.readmore').hide()
  $('.readless').show()
})

$(".readless").click(function () {
  $('.hide').slideUp()
  $('.readmore').show()
  $('.readless').hide()
})

$(".learnmore").click(function () {
  $('.hideside').slideDown()
  $('.learnmore').hide()
})
