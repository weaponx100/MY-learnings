let url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns=document.querySelectorAll(".dropdown select");

let response = await fetch(url);
let data = await response.json();
let rate=data;
console.log()