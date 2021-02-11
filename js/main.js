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
  $picture.src = userInput;
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
});

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

  $divForm.setAttribute('class', 'hidden');
  $divEntries.removeAttribute('class');
  data.view = 'entry';
  currentUL.prepend(getEntry(data.entries[0]));
});
