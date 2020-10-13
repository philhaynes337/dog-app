'use strict';

function getDogImage(breed) {
  fetch('https://dog.ceo/api/breed/' + breed +'/images/random') /*  https://dog.ceo/api/breed/hound/images/random    */
    

    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert("Something went wrong!"));

   
   console.log(breed);

}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one

  if (responseJson.status == "success") {
  $('.js-add-img').append(
    `<div class="js-box">
    	<img src="${responseJson.message}" class="results-img">
    </div>`
  )
}
  else if (responseJson.status == "error") {

  console.log("If else error worked")
  $('.js-add-img').append(
      `
        <div class="js-box">
        Please recheck the breed name and spelling!
        </div>
      `   
    )
  

}
  console.log(responseJson.message);
  console.log(responseJson.code);
  console.log(responseJson.status);
  //display the results section
  //$('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.js-box').remove();
    
    let totalDogPics = $("select#numdogs").val();

    let convertTotalDogPics = parseInt(totalDogPics, 10);
 

    let dogBreed = $("input#js-breed:text").val();
    //console.log(dogBreed);
    
    for (let i = 1; i <= convertTotalDogPics; i++) {


			getDogImage(dogBreed);
			
    
    }


  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  //notFound();

});

function notFound() {

  console.log("Image not found");
}




let htmlD = '';	

for (let i = 1; i < 51; i++) {
	
	let htmlElement = document.getElementById('numdogs');
	htmlElement.innerHTML += '<option id="numbdogsValue" name="numbers" value="' + i + '">' + i +'</option>';


}