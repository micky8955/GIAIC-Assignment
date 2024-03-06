// initializing variable "myName1"
let myName1:string;
// declaring variable "myName1"
myName1="A.Ahad";
// applyinguppercase
let uppercaseName1=myName1.toUpperCase();
// printuppercase
console.log("Uppercase =",uppercaseName1);
// applyinglowercase
let lowercaseName1=myName1.toLowerCase();
// printlowercase
console.log("Lowercase =",lowercaseName1);
// applyingtitlecase
let titlecasemyName1=myName1.replace(/(^|\s)\S/g,(char)=>char.toUpperCase());
// printtitlecase
console.log("Titlecase =",titlecasemyName1);