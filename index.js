'use strict';

function howManyDogs() {
  $('form').on('submit', event => {
    event.preventDefault();
    const numberOfDogs = $('input').val();
    console.log(numberOfDogs);
    $('input').val('');
    getDogRequest();
  });
}

function getDogRequest() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson =>
      displayDogs(responseJson))
    .catch(error => alert('Something went wrong.  Please try again later.'));
}

function displayDogs(responseJson) {
  console.log(responseJson);
  $('.dog-pics').html(`<img src="${responseJson.message}">`);
}

function handleDogs() {
  howManyDogs();
}

$(handleDogs);