var script = document.createElement('script')
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

// JavaScript Document
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden')
    },
  })
})
