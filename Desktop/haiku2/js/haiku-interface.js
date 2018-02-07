import { Haiku } from './../js/haiku.js';

$(document).ready(function() {
  $('#line-form').submit(function(event) {
    event.preventDefault();
    var line1 = $('#line1').val();
    var line2 = $('#line2').val();
    var line3 = $('#line3').val();
    console.log(line1);
  })
})
