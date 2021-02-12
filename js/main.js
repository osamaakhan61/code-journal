/* global data */
/* exported data */
var $entryLink = document.querySelector('.entry-page');
var $formLink = document.querySelector('.new-form');
var $divForm = document.querySelector("div [data-view='entry-form'");
var $divEntries = document.querySelector("div [data-view='entries'");

if (data.view === 'entry-form') {
  $divEntries.setAttribute('class', 'hidden');
  $divForm.removeAttribute('class');
}

var $photoURL = document.querySelector("input[type='url']");
var $picture = document.querySelector('img');

$photoURL.addEventListener('input', function (event) {
  var userInput = event.target.value;
  $picture.setAttribute('src', userInput);
});

var $formButton = document.querySelector('#submitForm');

var currentUL = document.querySelector('ul');

function getEntry(entry) {
  var newLi = document.createElement('li');
  var newIMG = document.createElement('img');
  var newDIV = document.createElement('div');
  var newHead = document.createElement('h2');
  var newPara = document.createElement('p');
  var editIcon = document.createElement('i');

  newIMG.setAttribute('class', 'column-half');
  newDIV.setAttribute('class', 'column-half');
  editIcon.setAttribute('class', 'fas fa-edit');

  newIMG.setAttribute('src', entry.imageURL);

  var newHeadContent = document.createTextNode(entry.title);
  var newParaContent = document.createTextNode(entry.notes);

  newHead.appendChild(newHeadContent);
  newPara.appendChild(newParaContent);

  newDIV.appendChild(newHead);
  newHead.appendChild(editIcon);
  newDIV.appendChild(newPara);

  newLi.appendChild(newIMG);
  newLi.appendChild(newDIV);

  newLi.setAttribute('data-entry-id', entry.nextEntryId);

  return newLi;
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    currentUL.append(getEntry(data.entries[i]));
  }
});

$entryLink.addEventListener('click', function (event) {
  $divForm.setAttribute('class', 'hidden');
  $divEntries.removeAttribute('class');
  data.view = 'entry';
}
);

$formLink.addEventListener('click', function (event) {
  $divEntries.setAttribute('class', 'hidden');
  $divForm.removeAttribute('class');
  data.view = 'entry-form';
  data.editing = null;
});

$formButton.addEventListener('submit', function (event) {
  event.preventDefault();
  var listID = data.editing.nextEntryId;
  var indexNum = (data.nextEntryId - listID) - 1;
  var $listSelector = document.querySelectorAll('li');
  if (data.editing !== null) {
    data.entry[indexNum].imageURL = $formButton.elements.URL.value;
    data.entry[indexNum].title = $formButton.elements.title.value;
    data.entry[indexNum].notes = $formButton.elements.notes.value;

    // eslint-disable-next-line no-console
    console.log($listSelector[indexNum]);

  } else {
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

    currentUL.prepend(getEntry(data.entries[0]));
  }
  $divForm.setAttribute('class', 'hidden');
  $divEntries.removeAttribute('class');
  data.view = 'entry';
});

currentUL.addEventListener('click', function (event) {
  var $icon = document.querySelectorAll('i');
  for (var j = 0; j < $icon.length; j++) {
    if (event.target === $icon[j]) {
      $divEntries.setAttribute('class', 'hidden');
      $divForm.removeAttribute('class');
      data.view = 'entry-form';

      var listEdit = data.entries[j];
      data.editing = listEdit;

      $formButton.elements.URL.value = data.entries[j].imageURL;
      $formButton.elements.title.value = data.entries[j].title;
      $formButton.elements.notes.value = data.entries[j].notes;

      $picture.setAttribute('src', data.entries[j].imageURL);
    }
  }
});
