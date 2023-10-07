/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let domain = [".com", ".io", ".net", ".uy"];

const final = () => {
  let result = pronouns[Math.floor(Math.random() * pronouns.length)];
  result += adjectives[Math.floor(Math.random() * adjectives.length)];
  result += nouns[Math.floor(Math.random() * nouns.length)];
  result += domain[Math.floor(Math.random() * domain.length)];
  return result;
};

window.onload = function() {
  //write your code here
  let finalDomain = document.querySelector("#finalDomain");
  finalDomain.innerHTML = final();
};
