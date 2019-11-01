'use strict';

function getDogRequest(query, displayCallback) {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson =>
      displayDogs(responseJson))
      .then(responseJson => displayCallback(responseJson))
    .catch(error => alert('Something went wrong.  Please try again later.'));
}

function displayDogs(responseJson) {
  console.log(responseJson);
  $('.dog-pics').html(`<img src="${responseJson.message}">`);
}

function howManyDogs() {
  $('form').on('submit', event => {
    event.preventDefault();
    const numberOfDogs = $('input').val();
    const defaultValue = $('inpit').val();
      $('input').val("3")
    console.log(numberOfDogs);
    console.log(defaultValue);
    $('input').val('');
    getDogRequest();
  });
}




function handleDogs() {
  howManyDogs();
}

$(handleDogs);