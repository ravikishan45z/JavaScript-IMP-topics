//! Array == it is used to store different datatypes of element in a single variable.

//! Different values Allowed
//! ARRAY PART_1

// let arr = new Array;
// arr[0] = 23;
// arr[1] = 24;
// arr[5] = 42;
// console.log(arr);

// let marks = [12,42,42,53,63,63,63];
// console.log(marks[4]);

// let arr = [44,545,6246,6265,65,525,62,2,4453,25];
// arr.push(4324); //ending me add karta hai
// arr.pop(); // last se hata hai
// arr.shift(); // starting se hata hai
// arr.unshift(432); //starting me add karta hai
// arr.splice(3,6); //used to remove values form to - where
// console.log(arr.slice(2,4)); //return a new array;
// arr.reverse();
// arr.sort(); //by default assending order.

// arr.sort(function(a,b){
//     return a - b;
// });

// arr.sort(function(a,b){
//     return b - a;
// });
// console.log(arr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// forEach loop we can say it.
// arr.forEach(function(val){
//     val = val+ 5;
//     console.log(val);
// });

// Map sirf tab use karna hai jab aapko new array banana hai previous array ko use karke.

let newarray = arr.map(function(val){
    return 32;
})
console.log(newarray);


//! Array PART_2