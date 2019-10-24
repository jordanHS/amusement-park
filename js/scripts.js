$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? (inches)"));

  if (height >= 54) {
    $('#fiftyFourInches').show();
} else {
  $('#under-54').show();
  }
});
