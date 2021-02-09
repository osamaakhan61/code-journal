/* global data */
/* exported data */
var $photoURL = document.querySelector("input[type='url']");
var $picture = document.querySelector('img');

$photoURL.addEventListener('input', function (event) {
  var userInput = event.target.value;
  $picture.src = userInput;
});
