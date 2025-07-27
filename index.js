/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function convert() {
  const input = document.getElementById("inputValue").value;
  convertLength(input);
  convertVolume(input);
  convertMass(input);
}

function convertLength(input) {
  const meters = (input / 3.281).toFixed(3);
  const feet = (input * 3.281).toFixed(3);
  length.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`;
}

function convertVolume(input) {
  const liters = (input * 0.264).toFixed(3);
  const gallons = (input * 0.264).toFixed(3);
  volume.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`;
}

function convertMass(input) {
  const pounds = (input * 2.204).toFixed(3);
  const kilos = (input / 2.204).toFixed(3);
  mass.textContent = `${input} kilograms = ${pounds} pounds | ${input} pounds = ${kilos} kilograms`;
}
