'use strict';

function howManyDogs() {
  $('form').on('submit', event => {
    event.preventDefault();
    const numberOfDogs = $('input').val();
    console.log(numberOfDogs);
    $(event.currentTarget).val('');
  });
}

/*function getDogRequest() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()))
        .then(response.json =>
            
        )
        .catch(error => alert('Something went wrong.  Please try again later.'));
}*/

function handleDogs() {
  howManyDogs();
}

$(handleDogs);