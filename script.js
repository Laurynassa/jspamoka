"use strict";

console.log("hello world!");

var name = "Petras";
console.log(name);
var name = "Jonas";
console.log(name);
let name1 = "Tomas";
console.log(name1);
name1 = "Lokys";
console.log(name1);
const name2 = "Pirmas";
console.log(name2);
// name3 = "Antras";
// console.log(name3);
let first;
first = "Car";
console.log(first);
// const second;
// second = "Pukas";
// console.log(second);
const language = "js";
const author = "brendam eich";
console.log(language + " was vreated by " + author);
const age = 25;
const price = 11.99;
console.log(2 + 3); // 5
console.log(7 / 2); // 3.5
console.log("Ejo " + name2 + " ir sutiko " + name1 + " Pabaiga");
console.log(`Ejo ${name2} ir sutiko ${name1} pabaiga `);
let mystring = "vakarieniauti";
console.log(mystring.charAt(5));
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

// let text1 = "laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.concat(text2, text3).charAt(16);
// console.log(concatenatedText);

const str1 = "Cats are the best!";
console.log(str1.endsWith("best!"));
// Expected output: true
console.log(str1.endsWith("best", 17));
// Expected output: true
const str2 = "Is this a question?";
console.log(str2.endsWith("question"));

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1
// let text4 = "laba diena.kaip sekasi?Grazi diena";
// let concatenatedText1 = text1.length();
// console.log(concatenatedText);

// let text1 = "laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.repeat(3);
// console.log(concatenatedText);

// let text1 = "laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.replace("diena", "ryta");
// console.log(concatenatedText);

// let text1 = "laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.search("ie");
// console.log(concatenatedText);

// let text1 = "laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.slice(3, 6);
// console.log(concatenatedText);

// let text1 = "laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.split("");
// console.log(concatenatedText);

// let text1 = "laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.substring(5, 9);
// let toUpper = text1.charAt(5).toUpperCase();
// let subs = text1.substring(6, 10);
// let concanted = toUpper.concat(subs);
// console.log(concatenatedText);
// console.log(toUpper);
// console.log(subs);
// console.log(concanted);

// let text1 = true;
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.toString();
// console.log(typeof concatenatedText);

// let text1 = "    laba diena.";
// let text2 = "kaip sekasi?";
// let text3 = "Grazi diena";
// let concatenatedText = text1.trim();
// console.log(concatenatedText);

// let x = 6;
// console.log(++x);
// console.log(x--);
// console.log(x);

let tekstas = "labas";
tekstas = "ate";
console.log(tekstas);
// const nekeiciamas, objektai parasomi
// let keiciamim, pagrinde let naudojam kintamiems
