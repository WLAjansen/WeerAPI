"use strict"; //opt-out of "sloppy mode"
const debug = true; //debuggen
//overige variabelen
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key="; // address
let key = "demo";
//let key = "77f9e00dfd"; // key van docent
let locatie = "&locatie=";
//let geoLocation = "52.391225, 4.856799"; //longitude lattitude als locatie
let geoLocation = "Amsterdam"; // locatie als string
let url = apiAddress + key + locatie + geoLocation;//haal hier data
//bind HTML elements via DOM
let getWeather2 = document.getElementById('getWeather2'); // bind via DOM
let weerButton = document.getElementById('weatherButton'); // bind via DOM
let weerButton2 = document.getElementById('weatherButton2'); // bind via DOM
let weatherTickerTape = document.getElementById('weatherTickerTape'); // bind via DOM
let weatherHere = document.getElementById('weatherHere'); // bind via DOM
let completeWeatherHere = document.getElementById('completeWeatherHere '); // bind via DOM

weerButton2 = addEventListener('click', getWeather2now); // bind via DOM

function getWeather2now(){
    
    weatherHere.innerHTML = "";
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}

function showWeather2(weatherString){
   // console.log(weatherString);
    let weerLucas = JSON.parse(weatherString);
    console.log(weerLucas.liveweer[0].d1weer);
    let completeData = "";
    for (const [key, value] of Object.entries(weerLucas.liveweer[0])) {
        debug ? console.log('${key}: ${value}') : ""; // debug naar console
        completeData += key + " : " + value +"<br>"; // maak string
        weatherHere.innerHTML = completeData; // string printen in browser
    }
}

