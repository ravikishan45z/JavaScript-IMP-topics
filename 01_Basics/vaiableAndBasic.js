// Operators
// airthmatic, comperasion, logical, assignmeny, unary and ternary operatirs;

//! Q1
let Admin = true;
let isLogin = false;

if(Admin || isLogin){
    console.log("Access granteed");
}else{
    console.log("Access denied");
}

//! Q2
let temp = 35;
if(!(temp < 30)){
    console.log("Not Hot");
}else{
    console.log("its hot");
}

//! Q3
let a = 0;
if(a){
    console.log("truthy");
}else{
    console.log("falsy");
}

//! Q4
const score = 78;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B': score >= 70 ? 'C' : score >= 60 ? 'D' : "fail";
console.log(grade);

//! Q5

let points = 120;
let medle = points > 100 ? "Gold" : points >50 ? "Silver" : 'Bronze';
console.log(medle);

//! Q6

