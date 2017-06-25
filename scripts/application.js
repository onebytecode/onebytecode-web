const $window  =  $(window)
$window.on('load', function() {

  const nav = $("#nav")
  const top = "top"
  const hdr = parseFloat($('#header').outerHeight())


  $window.scroll(function() {
    if( $(this).scrollTop() > hdr ) {
    	nav.addClass(top)
    } else {
    	nav.removeClass(top)
    }
  })

})
