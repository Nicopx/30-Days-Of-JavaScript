//1)
let challenge = '30 Days Of JavaScript';
//2)
console.log(challenge);
//3)
console.log(challenge.length);
//4)
let upperCase = challenge.toLocaleUpperCase();
//5)
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
