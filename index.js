'use strict';

function getDogRequest(numberOfDogs, displayDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;})
    .then(responseJson => displayDogs(responseJson))
    .catch(error => alert('Something went wrong.  Please try again later.'));
}

function displayDogs(responseJson) {
  let placeholder = "";
  responseJson.message.forEach(element => {
    placeholder += `<img src="${element}"></img></br>`;
  });
  $('.dog-pics').html(placeholder);
  console.log(responseJson);
}

function dogSearch(data) {
  const searchedDogs = data.message.map((item, index) => displayDogs(item));
  $('.dog-pics').html(searchedDogs);
}

function howManyDogs() {
  $('form').on('submit', event => {
    event.preventDefault();
    const numberOfDogs = $('input').val();
    $('input').val('3');
    console.log(numberOfDogs);
    $('input').val('');
    getDogRequest(numberOfDogs, displayDogs);
  });
}

function handleDogs() {
  howManyDogs();
}

$(handleDogs);