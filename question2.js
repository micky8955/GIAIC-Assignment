"use strict";
let myName;
myName = "A.Ahad";
let uppercaseName = myName.toUpperCase();
console.log("Uppercase =", uppercaseName);
let lowercaseName = myName.toLowerCase();
console.log("Lowercase =", lowercaseName);
let titlecasemyName = myName.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
console.log("Titlecase =", titlecasemyName);
