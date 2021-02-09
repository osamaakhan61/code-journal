/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $submitButton = document.querySelector('button');

$submitButton.addEventListener('submit', function (event) {
  var formJSON = JSON.stringify(data);
  localStorage.setItem('form-local-storage', formJSON);
})
;
