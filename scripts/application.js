import 'jquery'

var $window  =  $(window)
$window.on('load', function() {

  var nav = $("#nav"),
        top = "top",
        hdr = $('#header').height(),
        wrapper = $('#wrapper'),
        wrapper_padding = parseFloat(wrapper.css("padding-top")),
        mnheight = parseFloat($('#mainNavContainer').height()),
        newHeight = wrapper_padding + mnheight + 'px'

  $window.scroll(function() {
    if( $(this).scrollTop() > hdr ) {
    	nav.addClass(top)
    } else {
    	nav.removeClass(top)
    }
  })

})
