import React from 'react'

const apiKey = "Uf9d5B4qejVvKyz06egbENSo0TTyfeDjDEQIlpH2";
const url = "https://api.nasa.gov/planetary/apod?";

let container = document.querySelector(".container");
//let button = document.getElementById("fetch-image");


const GetImage = (value) => {

    let imageContainer = document.querySelector(".image-container");
    imageContainer.remove();
  
    let newImageContainer = document.createElement("div");
    newImageContainer.classList.add("image-container");
  
    container.append(newImageContainer);
  
    let dateInput = document.querySelector(".details-input input");
    let date = dateInput.value;
  
    let request = new XMLHttpRequest();
    request.open("GET", url + "date=" + date + "&api_key=" + apiKey, true);
    request.send();
    request.onload = function () {
      if (request.status === 200) {
        let data = JSON.parse(request.responseText);
        let imageUrl = data.url;
        let image = document.createElement("img");
        image.src = imageUrl;
        newImageContainer.append(image);
      } else {
        window.alert("Please enter the date in correct format.");
      }
    };

    function handleClick (){
      GetImage("normal");
    }

    return(
      <button onClick={handleClick}>Fetch</button>
    )
  }

  export default GetImage