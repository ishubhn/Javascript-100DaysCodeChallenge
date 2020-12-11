const country = 'India';      //string

const continent = 'Asia';     //string

let population = 130000000; //number

// console.log('My country is: '+ country + ', it is in ' + continent + '. And we have ' + population + ' peoples');

const isIsland = 'false';  //boolean
// country = 'USA';             #Can't change const values - throws TypeError"
let language = "Marathi";       //unidentified

console.log(population / 2);
console.log(population + 1);
console.log(population > 6000000);
console.log(33000000 > population);

//Pattern
let description = country + ' is in ' + continent + ', and its '+ population +' people speak ' + language + '.';
console.log(description);

//String Literals
let desc1 = `${country} is in ${continent}, and its ${population} people speak ${language}.`
console.log(desc1);