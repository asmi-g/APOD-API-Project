import React from 'react'
import GetImage from './GetImage'

function GenerateImg() {
    
    let button = document.getElementById("fetch-image");

    button.addEventListener("click", () => {
      GetImage("normal");
    });
}

export default GenerateImg