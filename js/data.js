/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $formButton = document.querySelector('#submitForm');

$formButton.addEventListener('submit', function (event) {
  var formInputs = {
    imageURL: $formButton.elements.URL.value,
    title: $formButton.elements.title.value,
    notes: $formButton.elements.notes.value
  };
  // eslint-disable-next-line no-console
  console.log(formInputs);
}
)
;
