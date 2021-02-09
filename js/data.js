/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $formButton = document.querySelector('#submitForm');

$formButton.addEventListener('submit', function (event) {
  event.preventDefault();
  // eslint-disable-next-line no-unused-vars
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
