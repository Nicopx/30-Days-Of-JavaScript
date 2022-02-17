//1)
let challenge = '30 Days Of JavaScript';
//2)
console.log(challenge);
//3)
console.log(challenge.length);
//4)Pasa todos los caracteres a mayusculas.
let upperCase = challenge.toLocaleUpperCase();
//5)Pasa todos los caracters a minusculas.
let lowerCase = challenge.toLocaleLowerCase();
//6)
let cutString = challenge.substring(0, 3);
//7) 
let sliceStr = challenge.substring(2, challenge.length);
//8)
let include = challenge.includes("Script");
//9)
let spit = challenge.spit(); //array
//10)
let spitSpc = challenge.spit("");//array indexado
//11)
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let result = str.spit(",");
// ["Facebook" ," Google" ," Microsoft" ," Apple" ," IBM" ," Oracle" ," Amazon"]

//12)Reemplaza JavaScript por Python
let replace = challenge.replace("JavaScript", "Python");
//13)
let char = challenge.charAt(15);
//14) 
let result = str.charCodeAt("J");
//15)
let firstIndex = str.indexOf("a");
//16) 
let lastIndex = str.lastIndexOf("a");
//17)
let str = 'You cannot end a sentence with because because because is a conjunction';
let find = str.indexOf('because');
console.log(find); //47
//18)
let lastdFind = str.lastIndexOf('because');
console.log(lastFind);
//19)
let seacrhWord = str.search('because');
console.log(seacrhWord); //31
//20) trim remueve los espacios de los laterales.
let srtSpc = ' 30 Days Of JavaScript ';
console.log(srtSpc.trim());
//21)
let str3 = '30 Days Of JavaScript';
let startWith = str.startsWith('30', 0);
console.log(startWith);
//22)
let str4 = '30 Days Of JavaScript';
let endWith = str.endsWith('pt');
console.log(endWith);
//23)
let str4 = '30 Days Of JavaScript';
let regex = /[a]/gi
let startWith = str4.match(regex);
console.log(startWith); //["a", "a", "a"]
//24)
let str1 = '30 Days'
let str2 = 'Of JavaScript';
let union = str1.concat(' ', str2);
console.log(union);
//25)
let str1 = '30 Days Of JavaScript'
let union = str1.repeat(2);
console.log(union)

//------------------------------- Level 2 ---------------------------------------------------------

//1)
console.log('There is no exercise better for the heart than reaching down and lifting people up.')
//2)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//3)
let n1 = "10"
let n2 = 10

if (n1 !== n2) {
    console.log("Variables distintas, cambiando")
}

let n2Str = n2.toString()

if (n1 === n2Str) {
    console.log("YEAH")
}

//4)

let str = '9.8'
let int = 10

if (parseFloat(str) !== int) {
    console.log("no equal")
}

let result = int - parseFloat(str)

let num = parseFloat(str) + result

console.log(num)

if (num === int) {
    console.log("Equal")
}

//5)
const word = "on";
const str1 = "python";
const str2 = "jargon";

if (str1.includes(word) && str2.includes(word)) {
    console.log("found")
}

//6)
const sentence = "I hope this course is not full of jargon"

if (sentence.includes("jargon")) {
    console.log("yeah")
}

//7) Genera un número entre 0 y 100
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 101
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 100

//8)
let min = 50
let max = 101

let result = Math.random() * (max - min) + min;
let roundResult = Math.floor(result)

console.log(roundResult);


//9) genera un numero entre 0 y 255

let randomNum = Math.random()         // genera un número entre 0 y 0.999
let numBtnZeroAndTen = randomNum * 206
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // imprime el numero random entre 0 y 255

//10)
//Access the 'JavaScript' string characters using a random number.
const str = "JavaScript"

let strLength = str.length //guardo la longitud

let randomNum = Math.random() * (strLength + 1)
let randomRound = Math.floor(randomNum)

for (let i = 0; i <= strLength; i++) {
    console.log(str[randomRound])
}

//11)
