import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';

//define constants
const apiKey = "Uf9d5B4qejVvKyz06egbENSo0TTyfeDjDEQIlpH2";
const url = "https://api.nasa.gov/planetary/apod?";

//Document method: returns the first element within the HTML document
// that matches the specified "query"
//In this case, it's "container"
let container = document.querySelector(".container");


//Render CSS with React
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
  '&:hover': {
    backgroundColor: deepPurple[700],
  },
  fontFamily: 'Liquid',
}));

//Define our React component here
const GetImage = (value) => {

    //Perform the same querySelector action
    //It's fine when you only have one element that matches the query
    let imageContainer = document.querySelector(".image-container");
    imageContainer.remove();
  
    //Creating a div within the HTML document that contains the first imageContainer element
    let newImageContainer = document.createElement("div");
    newImageContainer.classList.add("image-container");
  
    //Adds that imageContainer element into the initial container defined
    container.append(newImageContainer);
  
    //Selects the input date from the date input
    let dateInput = document.querySelector(".details-input input");
    let date = dateInput.value;
  
    //API Call

    //Create a new XML request
    let request = new XMLHttpRequest();
    request.open("GET", url + "date=" + date + "&api_key=" + apiKey, true);
    request.send();
    //Defines a function to handle returned data
    request.onload = function () {
      if (request.status === 200) {
        //if request was sucessful...
        let data = JSON.parse(request.responseText);
        let imageUrl = data.url;
        let image = document.createElement("img");
        image.src = imageUrl;
        newImageContainer.append(image);
      } else {
        //if not sucessful...
        window.alert("Please enter the date in correct format.");
      }
    };

    //we create a new function within a React component to handle the button click event
    function handleClick (){
      GetImage("normal");
    }

    return(
      // <button onClick={handleClick} class="fetch-button">Fetch</button>
      <ColorButton onClick={handleClick} variant="contained" startIcon={<SearchIcon />} fontSize="large">Fetch</ColorButton>
    )
  }

  export default GetImage