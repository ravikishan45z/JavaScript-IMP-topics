// if else if else
// switch case.
// early return pattern
// functions

//! structure of if-else if-else
// if(condition){

// }else if(condition){

// }else{

// }

//! Switch structure.
let val = 3;
switch(val){
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log("this is three");
        break;
    case 4:
        break;
    default : //default statement
}


//! early return problem
function getval(val){
    if(val < 25 ){
        return "a";
    }else if(val < 50){
        return "n";
    }else if(val < 100){
        return "c";
    }else{
        return "d";
    }
}

console.log(getval(200));

// ! Pratice question 1;
function getGrade(score){
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score < 80) {
      return "C";
    } else if (score > 60 && score < 70) {
      return "D";
    } else if (score > 50 && score < 60) {
      return "E";
    }else{
        return "F";
    }
}

Grade = getGrade(80);
console.log(Grade);


//! function in js.

function functionanme(){ //funciton statement.
    console.log("this is the function");    
}

let fcn = function(){ // function expression
    console.log("this is the function expression.");
}

// fat arrow function
let fnc = () =>{
    console.log("this is the arrow function");
}
fcn();

function add(v1, v2){ //v1 and v2 = parameter
    console.log(v1+v2);
}
add(1,3); //1,3 arguments.

function dance(val){
    console.log(`${val} is dancing.`);
}
dance("horce");
dance("donkey");
dance("buffallow");
dance("cow");
//! default rest and spread parameter.

function add1(v1,v2){
    console.log(v1+v2);
}
add1(); //NaN

function a(v1 = 0, v2 = 0){ //default parameter
    console.log(v1+v2);
}
add(12,42); // 

// Rest parameter
function abc(...val){  //...rest
    console.log(val);
}








