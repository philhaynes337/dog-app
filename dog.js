'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();

    let totalDogPics = document.getElementById('numdogs').val(); // Problem on this line
    console.log(totalDogPics);

    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});




let htmlD = '';	

for (let i = 1; i < 51; i++) {
	
	let htmlElement = document.getElementById('numdogs');
	htmlElement.innerHTML += '<option id="numbdogsValue" name="numbers" value="' + i + '">' + i +'</option>';


}