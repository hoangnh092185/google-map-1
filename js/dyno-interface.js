var apiKey = require('./../.env').apiKey;


$(document).ready(function(){
  $('#dino-input').click(function(event){
    event.preventDefault();

    var paragraph = parseInt($('#paragraph').val());
    var words = parseInt($('#words').val());
    // Ipsum response = new Ipsum(words, paragraph);

    $.get( 'http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=' + paragraph + "&words=" + words).then(function(response){
      $('#dyno-texter').text(response);
    });
  });
});
