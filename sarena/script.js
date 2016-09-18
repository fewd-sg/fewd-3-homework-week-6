$('.readmore').click(function(a) {
    $('.readmore').hide()
    $('#show-this-on-click').slideDown()
    $('.readless').show()
    a.preventDefault()
})

$('.readless').click(function(a) {
    $('.readless').hide()
    $('#show-this-on-click').slideUp()
    $('.readmore').show()
    a.preventDefault()
})

$('.learnmore').click(function(a) {
    $('.learnmore').hide()
    $('#learnmoretext').slideDown()
    a.preventDefault()
})
