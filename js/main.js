/* global data */
/* exported data */
var $photoURL = document.querySelector("input[type='url']");
var $picture = document.querySelector('img');

$photoURL.addEventListener('input', function (event) {
  var userInput = event.target.value;
  $picture.src = userInput;
});

var $formButton = document.querySelector('#submitForm');

$formButton.addEventListener('submit', function (event) {
  event.preventDefault();
  var formInputs = {
    imageURL: $formButton.elements.URL.value,
    title: $formButton.elements.title.value,
    notes: $formButton.elements.notes.value,
    nextEntryId: data.nextEntryId
  };
  data.nextEntryId++;

  data.entries.unshift(formInputs);
  var $imageReset = document.getElementById('image');
  $imageReset.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formButton.reset();
}
)
;
