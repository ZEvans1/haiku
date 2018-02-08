import { Haiku } from './../js/haiku.js';

$(document).ready(function() {
  $('#line-form').submit(function(event) {
    event.preventDefault();
    let line1 = $('#line1').val();
    let line2 = $('#line2').val();
    let line3 = $('#line3').val();
    console.log(line1);
    let haiku = new Haiku(line1, line2, line3);
    //haiku.collectWords();
    haiku.countSyllables();


  })
})
