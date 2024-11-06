/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  pronoun.map(pro => {
    adj.map(adje => {
      noun.map(nombre => {
        console.log(pro + adje + nombre + ".com");
      });
    });
  });
};
