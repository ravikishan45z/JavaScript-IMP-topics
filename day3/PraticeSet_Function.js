function Calc_BMI(weight, height){
    let bmi = weight / (height * height);
    return bmi;
}

console.log(`The Body Mass Index : ${Calc_BMI(70, 1.75).toFixed(2)}`);

discounter

function discountCalc(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}

let ten = discountCalc(10);
let twenty = discountCalc(20);
let thirty = discountCalc(30);
let fourty = discountCalc(40);
let fifty = discountCalc(50);

console.log(ten(500));
console.log(twenty(500));
console.log(thirty(500));


function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());



function double(val){
    return 2 * val;
}
console.log(double(10));
console.log(double(15));
console.log(double(13));


// ! use IIFI to isolate variable.
(function(){
    const pass = 123456;
    console.log(pass);
});
console.log(pass); // make error.