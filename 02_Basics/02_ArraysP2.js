const hero = ["IronMan", "SpiderMan", "Caption"];
const dc = ["BatMan", "SuperMan", "Flash"];
// const dc2 = ["BatMan", "SuperMan", "Flash"];

// hero.push(dc); //Array inside array.
// console.log(hero); 
// console.log(hero[3][1]);

// let newArray = hero.concat(dc);
// console.log(newArray);


// Spread Operator
const allHeros = [...hero, ...dc,];
console.log(allHeros);

const arr = [344,52,543,43,[5343,543,23,],54,[6342,432,[63443,[323232]]]];
const flattedArray =arr.flat(Infinity);
console.log(flattedArray); 

Array.isArray("RAVIKISHAN"); //true / false.
console.log(Array.from("RAVIKISHAN GAUR"));


let val1 = 345;
let val2 =3242;
let val3 = 432;
console.log(Array.of(val1,val2,val3));

