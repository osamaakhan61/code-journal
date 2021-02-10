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

  $divForm.setAttribute('class', 'hidden');
  $divEntries.removeAttribute('class');
  document.reload(true);
});

var currentUL = document.querySelector('ul');

function getEntry(entry) {
  var newLi = document.createElement('li');
  var newIMG = document.createElement('img');
  var newDIV = document.createElement('div');
  var newHead = document.createElement('h2');
  var newPara = document.createElement('p');

  newIMG.setAttribute('class', 'column-half');
  newDIV.setAttribute('class', 'column-half');

  newIMG.setAttribute('src', data.entries[i].imageURL);

  var newHeadContent = document.createTextNode(data.entries[i].title);
  var newParaContent = document.createTextNode(data.entries[i].notes);

  newHead.appendChild(newHeadContent);
  newPara.appendChild(newParaContent);

  newDIV.appendChild(newHead);
  newDIV.appendChild(newPara);

  newLi.appendChild(newIMG);
  newLi.appendChild(newDIV);

  return newLi;
}

for (var i = 0; i < data.entries.length; i++) {
  window.addEventListener('DOMContentLoaded', getEntry(data));
  currentUL.appendChild(getEntry(data));
}

var $entryLink = document.querySelector('.entry-page');
var $formLink = document.querySelector('.new-form');
var $divForm = document.querySelector("div [data-view='entry-form'");
var $divEntries = document.querySelector("div [data-view='entries'");

$entryLink.addEventListener('click', function (event) {
  $divForm.setAttribute('class', 'hidden');
  $divEntries.removeAttribute('class');
}
);

$formLink.addEventListener('click', function (event) {
  $divEntries.setAttribute('class', 'hidden');
  $divForm.removeAttribute('class');
}
);
