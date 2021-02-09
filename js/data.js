/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var previousDataJSON = localStorage.getItem('form-data-local');
if (previousDataJSON !== null) {
  data.entries = JSON.parse(previousDataJSON);
}

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

  data.entries = formInputs;
  var $imageReset = document.getElementById('image');
  $imageReset.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formButton.reset();
}
)
;

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data.entries);
  localStorage.setItem('form-data-local', dataJSON);
});
