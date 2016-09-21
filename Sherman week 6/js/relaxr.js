$(".readmore").click(function () {
  $('.full').slideDown()
  $('.hide').hide()
  $('.readmore').hide()
  $('.readless').show()
})

$(".readless").click(function () {
  $('.full').slideUp()
  $('.hide').show()
  $('.readmore').show()
  $('.readless').hide()
})

$(".learnmore").click(function () {
  $('.hideside').slideDown()
  $('.learnmore').hide()
})
