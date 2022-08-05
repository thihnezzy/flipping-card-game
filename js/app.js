const backCard = document.querySelectorAll(".back-card");

const axios = require('axios');

//By default
window.onload = ()=>{
    const displayBackCard = (div) =>{
        const img = document.createElement('img');
        img.src = "./images/card-back-side.webp";
        img.style.width = "180px";
        img.style.height = "240px";
        div.append(img);
    }
    
    for (let e of backCard){
        displayBackCard(e);
    }
}

//Fetching image from pokeapi
/*
url: https://pokeapi.co/api/v2/pokemon/ditto


*/


//Using Axios to get images data
const res = axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res =>{
        console.log(res.data)
    })



