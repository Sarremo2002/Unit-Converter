/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const inputValue = document.getElementById("inputValue");

function convert() {}

function convertLength() {
  const feet = (inputValue * 3.281).toFixed(3);
  const meters = (inputValue / 3.281).toFixed(3);
}

function convertVolume() {
  const liters = (inputValue * 0.264).toFixed(3);
  const gallons = (inputValue / 0.264).toFixed(3);
}

function convertMass() {
  const kilos = (inputValue * 2.204).toFixed(3);
  const pounds = (input / 2.204).toFixed(3);
  console.log(kilos);
}

convertMass();
